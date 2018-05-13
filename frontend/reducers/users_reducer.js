import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import { RECEIVE_CHAT, RECEIVE_CHATS } from '../actions/chat_actions';

const _nullUser = {};

const UsersReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_USER:
      newState = Object.assign({}, state);
      newState[action.user.id] = action.user;
      return newState;
    // case RECEIVE_POSTS:
    //   return action.posts;
    case RECEIVE_USERS:
      return Object.assign({}, state, action.users);
    case RECEIVE_CHAT: case RECEIVE_CHATS:
      return Object.assign({}, state, action.payload.users);
    default:
      return state;
  }
};

export default UsersReducer;
