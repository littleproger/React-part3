import {
  HIDE_EDIT_USER_MODAL,
  FETCH_USERS,
  FETCHED_USERS,
  ADD_USER,
  EDIT_USER,
  DELETE_USER,
  SHOW_EDIT_USER_MODAL,
} from "./actionsType";

export const addUser = (data) => {
  return {
    type: ADD_USER,
    payload: data,
  };
};
export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};
export const fetchUsers = () => {
  return {
    type: FETCH_USERS,
  };
};
export const showEdit = (data = null) => {
  return {
    type: SHOW_EDIT_USER_MODAL,
    payload:data
  };
};
export const editUser = (data) => {
  return {
    type: EDIT_USER,
    payload: data,
  };
};
export const hideEdit = () => {
  return {
    type: HIDE_EDIT_USER_MODAL,
  };
};
