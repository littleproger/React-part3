import {
  ADD_NEW_MESSAGE,
  FETCHED_MESSAGES,
  DELETE_MESSAGE,
  SHOW_EDIT,
  HIDE_EDIT,
  EDIT_MESSAGE,
} from "../actions/actionsType";
const initialState = {
  messages: [],
  editMsg: {
    id: "",
    editMsg: false,
    text: "",
  },
};

export function chatReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      const message = {
        id: action.payload.id,
        userId: action.payload.userId,
        avatar: action.payload.avatar,
        user: action.payload.user,
        text: action.payload.text,
        createdAt: action.payload.createdAt,
        editedAt: "",
      };
      return { ...state, messages: [...state.messages, message] };

    case FETCHED_MESSAGES:
      const messages = Object.keys(action.payload).map(
        (item) => action.payload[item]
      );
      return { ...state, messages: [...messages] };

    case DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(
          (message) => message.id !== action.payload
        ),
      };

    case SHOW_EDIT:
      if (action.payload) {
        const text = state.messages.filter(
          (message) => message.id === action.payload
        );
        return {
          ...state,
          editMsg: { id: action.payload, editMsg: true, text: text[0].text },
        };
      } else {
        const myMessage = state.messages.filter(
          (message) => state.myInform.userId === message.userId
        );
        const lastMessage = myMessage[myMessage.length - 1];
        if (lastMessage) {
          return {
            ...state,
            editMsg: {
              id: lastMessage.id,
              editMsg: true,
              text: lastMessage.text,
            },
          };
        } else {
          alert(
            "You must write message first!\nThis button for edit last message!"
          );
        }
      }

    case HIDE_EDIT:
      return { ...state, editMsg: { id: "", editMsg: false, text: "" } };

    case EDIT_MESSAGE:
      return {
        ...state,
        messages: state.messages.map((message) => {
          if (message.id === action.payload.id) {
            message.text = action.payload.text;
            message.editedAt = action.payload.editedAt;
          }
          return message;
        }),
      };

    default:
      return state;
  }
}
