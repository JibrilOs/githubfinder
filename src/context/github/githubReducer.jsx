import {
  SEARCH_USERS,
  GET_USER,
  GET_REPOS,
  CLEAR_USERS,
  SET_ALERT,
  SET_LOADING,
  REMOVE_ALERT,
} from "../types";
const GithubReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return { ...state, users: action.payload, loading: false };
    case GET_USER:
      return { ...state, user: action.payload, loading: false };
    case GET_REPOS:
      return { ...state, repos: action.payload, loading: false };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default GithubReducer;
