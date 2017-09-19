import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

const _nullSession = {};

const SessionReducer = (state = _nullSession, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return Object.assign({}, { currentUser });
    default:
      return state;
  }
};
