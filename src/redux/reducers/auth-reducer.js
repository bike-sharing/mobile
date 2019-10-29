import { AUTH_STATE_CHANGE } from '../action-types';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_STATE_CHANGE:
      return action.auth;
    default:
      return state;
  }
}
