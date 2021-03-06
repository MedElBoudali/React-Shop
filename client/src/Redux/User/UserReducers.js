import {
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_ERROR,
  CLEAR_AUTH_ERROR
} from './UserTypes';

const INITIAL_STATE = {
  currentUser: null,
  authLoading: true,
  authErrors: []
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
    case SIGN_UP_SUCCESS:
      return { ...state, currentUser: action.payload, authLoading: false, authErrors: [] };
    case SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null, authLoading: false, authErrors: [] };
    case SIGN_UP_ERROR:
    case SIGN_IN_ERROR:
    case SIGN_OUT_ERROR:
      return {
        ...state,
        currentUser: null,
        authLoading: false,
        authErrors: [...state.authErrors, action.payload]
      };
    case CLEAR_AUTH_ERROR:
      return { ...state, authLoading: false, authErrors: [] };
    default:
      return state;
  }
};

export default UserReducer;
