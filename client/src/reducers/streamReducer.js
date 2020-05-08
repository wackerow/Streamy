import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../actions";
import _ from "lodash";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_STREAM:
      return { ...state, [payload.id]: payload };
    case CREATE_STREAM:
      return { ...state, [payload.id]: payload };
    case EDIT_STREAM:
      return { ...state, [payload.id]: payload };
    case FETCH_STREAMS:
      // payload === [streams]
      // (consider removing ...state)
      return { ...state, ..._.mapKeys(payload, "id") };
    case DELETE_STREAM:
      // payload === id
      return _.omit(state, payload);
    default:
      return state;
  }
};
