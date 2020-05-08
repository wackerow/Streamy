import { SIGN_IN, SIGN_OUT } from "../actions";

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
};
export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
