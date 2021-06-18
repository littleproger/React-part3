import {
  SHOW_EDIT_USER_MODAL,
  FETCHED_USERS,
  EDIT_USER,
  HIDE_EDIT_USER_MODAL,
  ADD_USER,
  DELETE_USER
} from "../actions/actionsType";

const initialState = {
  users: [],
  editUsr: {
    user: {
      name: "",
      surname: "",
      email: "",
      password: "",
      avatar: "",
    },
    editUsr: false,
  },
};

export function adminReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHED_USERS:
      const users = Object.keys(action.payload).map(
        (item) => action.payload[item]
      );
      return { ...state, users: [...users] };
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case SHOW_EDIT_USER_MODAL:
      return { ...state, editUsr: { user: action.payload, editUsr: true } };
    case EDIT_USER:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload.id) {
            return { ...user, ...action.payload };
          } else {
            return user;
          }
        }),
      };
    case HIDE_EDIT_USER_MODAL:
      return {
        ...state,
        editUsr: {
          user: { ...state.editUsr.user, ...action.payload },
          editUsr: false,
        },
      };
    default:
      return state;
  }
}
