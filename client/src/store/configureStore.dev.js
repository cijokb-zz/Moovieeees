import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import { createFilter, createBlacklistFilter } from 'redux-persist-transform-filter';

import user from '../authentication/AuthReducer';
import { movieReducer as movies } from '../movie/MovieReducer';

const middlewares = [thunk, createLogger()];
const rootReducers = combineReducers({ user, movies });
// you want to remove some keys before you save
const saveSubsetBlacklistFilter = createBlacklistFilter(
    'user',
    ['authError']
);

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
    blacklist: ['movies'],
    transforms: [saveSubsetBlacklistFilter]
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const configStore = (initialState) => {
    const store = createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));
    const persistor = persistStore(store);
    return { store, persistor };
};
export default configStore;