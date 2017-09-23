import {searchUserDatabase} from '../util/user_api_util';
import {postFollow, deleteFollow } from '../util/follow_api_util';

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

export const searchDatabase = (query) => (dispatch) => (
  searchUserDatabase(query).then(
    (users) => dispatch(receiveUserSearchResults(users))
  )
);

export const followUser = (id) => (dispatch) => (
  postFollow(id).then(
    user => dispatch(receiveUser(user))
  )
);

export const unfollowUser = (id) => (dispatch) => (
  deleteFollow(id).then(
    user => dispatch(receiveUser(user))
  )
);
