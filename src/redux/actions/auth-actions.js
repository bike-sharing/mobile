/*
  Make use of loading state actions by mocking some authentication action creator
  This will be modified in the future with actual authentication logic
*/
import { LOADING_STATE_CHANGE, AUTH_STATE_CHANGE, CONNECTION_CHANGE } from '../action-types';

export const updateLoginData = (auth) => (dispatch) => {
  console.log('updating login data with', auth);
  dispatch({ type: AUTH_STATE_CHANGE, auth });
};

export const updateConnection = (wsConnection) => (dispatch) => {
  dispatch({ type: CONNECTION_CHANGE, connection: wsConnection });
};
