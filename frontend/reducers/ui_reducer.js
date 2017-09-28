import {RECEIVE_POSTS} from '../actions/post_actions';
import {RECEIVE_LOADING} from '../actions/loading';

const _nullLoading = {
  loading: false
};

const UiReducer = (state = _nullLoading, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POSTS:
      return Object.assign({}, { loading: false });
    case RECEIVE_LOADING:
      return Object.assign({}, { loading: true });
    default:
      return state;
  }
};

export default UiReducer;
