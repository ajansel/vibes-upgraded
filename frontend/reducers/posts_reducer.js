import {RECEIVE_POST, RECEIVE_POSTS} from '../actions/post_actions';

const _nullPosts = {};

const PostsReducer = (state = _nullPosts, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_POST:
      newState = Object.assign({}, state);
      newState[action.post.id] = action.post;
      return newState;
    case RECEIVE_POSTS:
      return action.posts;
    default:
      return state;
  }
};

export default PostsReducer;
