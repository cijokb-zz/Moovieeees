import { createStore } from 'redux';
import rootReducers from '../reducers';

const configStore = (intialState) => createStore(rootReducers, intialState);
export default configStore;