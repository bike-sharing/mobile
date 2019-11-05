import authReducer from './auth-reducer';
import loadingReducer from './loading-reducer';
import connectionReducer from './connection-reducer';
import { combineReducers } from 'redux';
import bikesReducer from './bikes-reducer';

export default combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  bikes: bikesReducer,
  connection: connectionReducer,
});
