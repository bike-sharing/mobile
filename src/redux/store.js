import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

const initialState = {};
const middleware = [thunk];

export default createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));
