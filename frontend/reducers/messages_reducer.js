import { RECEIVE_CHAT, RECEIVE_CHATS } from '../actions/chat_actions';

const _nullMessages = {};

const MessagesReducer = (state = _nullMessages, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHAT: case RECEIVE_CHATS:
      return Object.assign({}, state, action.payload.messages);
    default:
      return state;
  }
};

export default MessagesReducer;
