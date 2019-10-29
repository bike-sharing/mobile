import { LOADING_STATE_CHANGE } from '../action-types';

const initialState = false;

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_STATE_CHANGE:
      return action.loading;
    default:
      return state;
  }
}
