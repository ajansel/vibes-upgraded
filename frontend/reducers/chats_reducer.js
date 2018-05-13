import { RECEIVE_CHAT, RECEIVE_CHATS } from '../actions/chat_actions';

const _nullChats = {};

const ChatsReducer = (state = _nullChats, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHAT:
      return Object.assign({}, action.payload.chat);
    case RECEIVE_CHATS:
      return Object.assign({}, state, action.payload.chats);
    default:
      return state;
  }
};

export default ChatsReducer;
