import { CONNECTION_CHANGE } from '../action-types';

const initialState = null;

export default function(state = initialState, action) {
  switch (action.type) {
    case CONNECTION_CHANGE:
      return action.connection;
    default:
      return state;
  }
}
