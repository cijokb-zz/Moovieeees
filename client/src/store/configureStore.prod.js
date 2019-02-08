import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

import user from '../authentication/AuthReducer';
import { movieReducer as movies } from '../movie/MovieReducer';

const rootReducers = combineReducers({ user, movies });

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
    blacklist: ['movies']
};

const middlewares = [thunk];
const persistedReducer = persistReducer(persistConfig, rootReducers);

const configStore = (intialState) => createStore(persistedReducer, intialState, applyMiddleware(...middlewares));
export default configStore;