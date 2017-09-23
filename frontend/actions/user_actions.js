import {searchUserDatabase} from '../util/user_api_util';

export const RECEIVE_USER_SEARCH_RESULTS = "RECEIVE_USER_SEARCH_RESULTS";
// export const RECEIVE_USER_SEARCH_RESULTS_ERRORS =
//               "RECEIVE_USER_SEARCH_RESULTS_ERRORS";

const receiveUserSearchResults = (users) => ({
  type: RECEIVE_USER_SEARCH_RESULTS,
  users
});

export const searchDatabase = (query) => (dispatch) => (
  searchUserDatabase(query).then(
    (users) => dispatch(receiveUserSearchResults(users))
  )
);
