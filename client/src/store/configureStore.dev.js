import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import user from '../authentication/AuthReducer';

const rootReducers = combineReducers({ user });

const configStore = (initialState) => createStore(rootReducers, initialState, composeWithDevTools(applyMiddleware(createLogger())));
export default configStore;