import {getPost, getPosts, postPost, getProfilePosts, patchPost, destroyPost} from '../util/post_api_util';
import {postLike, deleteLike } from '../util/like_api_util';
import {updateCurrentUser} from './user_actions';
import {receiveLoading} from './loading';

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";

const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

export const receivePostErrors = (errors) => ({
  type: RECEIVE_POST_ERRORS,
  errors
});

export const fetchPost = (id) => (dispatch) => (
  getPost(id).then(
    (post) => dispatch(receivePost(post)),
    (err) => dispatch(receivePostErrors(err.responseJSON))
  )
);

export const fetchPostsFromFollowers = () => (dispatch) => {
  dispatch(receiveLoading());
  return getPosts().then(
    (posts) => dispatch(receivePosts(posts))
  );
};

export const fetchProfilePosts = (id) => (dispatch) => {
  dispatch(receiveLoading());
  return getProfilePosts(id).then(
    (posts) => dispatch(receivePosts(posts))
  );
};


export const createPost = (formPost, currentUserId) => (dispatch) => (
  postPost(formPost).then(
    (post) => dispatch(receivePost(post)),
    (err) => dispatch(receivePostErrors(err.responseJSON))
  ).then(
    () => dispatch(updateCurrentUser(currentUserId))
  )
);

export const updatePost = (formPost) => (dispatch) => (
  patchPost(formPost).then(
    (post) => dispatch(receivePost(post)),
    (err) => dispatch(receivePostErrors(err.responseJSON))
  )
);

export const deletePost = (postId, currentUserId) => (dispatch) => (
  destroyPost(postId).then(
    (post) => dispatch(receivePost(post)),
    (err) => dispatch(receivePostErrors(err.responseJSON))
  ).then(
    () => dispatch(updateCurrentUser(currentUserId))
  )
);

export const likePost = (id) => (dispatch) => (
  postLike(id).then(
    post => dispatch(receivePost(post))
  )
);

export const unlikePost = (id) => (dispatch) => (
  deleteLike(id).then(
    post => dispatch(receivePost(post))
  )
);
