import { SHOW_ERROR, SET_USER, SET_ADMIN } from "../actions/actionsType";

export function authReducer(state = {}, action) {
  switch (action.type) {
    case SET_USER:
      return {...state, ...action.payload, isAdmin: false}
    case SET_ADMIN:
      return {...state, ...action.payload, isAdmin: true}
    case SHOW_ERROR:
      alert(action.payload);
      return state;

    default:
      return state;
  }
}
