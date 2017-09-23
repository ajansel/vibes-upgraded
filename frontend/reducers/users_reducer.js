import {RECEIVE_USER} from '../actions/user_actions';

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
    default:
      return state;
  }
};

export default UsersReducer;
