import { BIKE_STATE_CHANGE, BIKE_POSITION_CHANGE } from '../action-types';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case BIKE_STATE_CHANGE:
      return Object.assign({}, state, {
        [action.id]: Object.assign({}, state[action.id], {
          state: action.state,
        }),
      });
    case BIKE_POSITION_CHANGE:
      return Object.assign({}, state, {
        [action.id]: Object.assign({}, state[action.id], {
          position: action.position,
        }),
      });
    default:
      return state;
  }
}
