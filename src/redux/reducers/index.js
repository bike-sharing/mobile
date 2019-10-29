import authReducer from './auth-reducer';
import loginReducer from './login-reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  auth: authReducer,
  login: loginReducer,
});
