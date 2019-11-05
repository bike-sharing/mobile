import { BIKE_STATE_CHANGE, BIKE_POSITION_CHANGE } from '../action-types';

export const updateBikeState = (bikeId, state, error) => (dispatch, getState) => {
  const connection = getState().connection;
  if (!connection) {
    return error('ERR_NO_CONNECTION');
  }

  connection.send(
    JSON.stringify({
      event: BIKE_STATE_CHANGE,
      data: {
        id: bikeId,
        state,
      },
    }),
  );

  dispatch({ type: BIKE_STATE_CHANGE, id: bikeId, state });
};

export const updateBikePosition = (bikeId, position, error) => (dispatch, getState) => {
  const connection = getState().connection;
  if (!connection) {
    return error('ERR_NO_CONNECTION');
  }

  connection.send(
    JSON.stringify({
      event: BIKE_POSITION_CHANGE,
      data: {
        id: bikeId,
        position,
      },
    }),
  );

  dispatch({ itype: BIKE_POSITION_CHANGE, id: bikeId, position });
};
