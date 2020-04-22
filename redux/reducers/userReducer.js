import axios from "axios";

export const USER_ACTIONS = {
  FETCH_USERS_SUCCEEDED: "FETCH_USERS_SUCCEEDED",
  SET_SELECTED_USER: "SET_SELECTED_USER",
};

const defaultState = {
  users: [],
  selectedUser: null,
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case USER_ACTIONS.FETCH_USERS_SUCCEEDED:
      return {
        ...state,
        users: action.users,
      };
    case USER_ACTIONS.SET_SELECTED_USER:
      return {
        ...state,
        selectedUser: action.selectedUser,
      };
    default:
      return state;
  }
};

export const fetchUsersAction = () => (dispatch) =>
  axios
    .get("https://reqres.in/api/users")
    .then((result) => dispatch(fetchUsersSucceededAction(result.data.data)));

export const fetchUserId = (id) => (dispatch) =>
  axios
    .get(`https://reqres.in/api/users/${id}`)
    .then((result) => dispatch(setSelectedUserAction(result.data.data)));

export const fetchUsersSucceededAction = (users) => ({
  type: USER_ACTIONS.FETCH_USERS_SUCCEEDED,
  users,
});

export const setSelectedUserAction = (selectedUser) => ({
  type: USER_ACTIONS.SET_SELECTED_USER,
  selectedUser,
});

export default userReducer;
