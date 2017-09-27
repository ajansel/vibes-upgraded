import {searchUserDatabase, getUser} from '../util/user_api_util';
import {postFollow, deleteFollow } from '../util/follow_api_util';
import {receiveCurrentUser} from './session_actions';
import {fetchProfilePosts, fetchPostsFromFollowers} from './post_actions';

export const RECEIVE_USER_SEARCH_RESULTS = "RECEIVE_USER_SEARCH_RESULTS";
export const RECEIVE_USER = "RECEIVE_USER";
// export const RECEIVE_USER_SEARCH_RESULTS_ERRORS =
//               "RECEIVE_USER_SEARCH_RESULTS_ERRORS";

const receiveUserSearchResults = (users) => ({
  type: RECEIVE_USER_SEARCH_RESULTS,
  users
});

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const fetchUser = (id) => (dispatch) => (
  getUser(id).then(
    (user) => dispatch(receiveUser(user))
  )
);

export const searchDatabase = (query) => (dispatch) => (
  searchUserDatabase(query).then(
    (users) => dispatch(receiveUserSearchResults(users))
  )
);

export const followUser = (id, currentUserId, feedType, userId) => (dispatch) => (
  postFollow(id).then(
    user => dispatch(receiveUser(user))
  ).then(
    () => {
      return dispatch(updateCurrentUser(currentUserId, feedType, userId));
    }
  ).then(
    () => {
      if (feedType === 'dashboard'){
        return dispatch(fetchPostsFromFollowers());
      } else if (feedType === 'profile') {
        return dispatch(fetchProfilePosts(userId));
      }
    }
  )
);

export const unfollowUser = (id, currentUserId, feedType, userId) => (dispatch) => (
  deleteFollow(id).then(
    user => dispatch(receiveUser(user))
  ).then(
    () => dispatch(updateCurrentUser(currentUserId, feedType, userId))
  ).then(
    () => {
      if (feedType === 'dashboard'){
        dispatch(fetchPostsFromFollowers());
      } else if (feedType === 'profile'){
        dispatch(fetchProfilePosts(userId));
      }
    }
  )
);

export const updateCurrentUser = (currentUserId) => (dispatch) => (
  getUser(currentUserId).then(
    (user) => dispatch(receiveCurrentUser(user))
  )
);
