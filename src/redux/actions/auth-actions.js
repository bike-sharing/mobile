/*
  Make use of loading state actions by mocking some authentication action creator
  This will be modified in the future with actual authentication logic
*/
import { LOADING_STATE_CHANGE, AUTH_STATE_CHANGE } from '../action-types';

export const loginUser = (loginData) => async (dispatch) => {
  dispatch({ type: LOADING_STATE_CHANGE, loading: true });

  // make use of login data here
  // and return an authenticated user
  // for now it will return dummy data after 2sec
  const auth = await new Promise((resolve) => {
    setTimeout(() => {
      const auth = {
        id: 'dummy-user-id',
        username: 'dummy-user-name',
      };
      resolve(auth);
    }, 2000);
  });

  dispatch({ type: AUTH_STATE_CHANGE, auth });
  dispatch({ type: LOADING_STATE_CHANGE, loading: false });
};
