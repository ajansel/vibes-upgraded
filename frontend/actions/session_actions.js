import {postUser, postSession, deleteSession} from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = (formUser) => (dispatch) => (
  postUser(formUser).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (err) => dispatch(receiveSessionErrors(err.responseJSON))
  )
);

export const login = (formUser) => (dispatch) => (
  postSession(formUser).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (err) => dispatch(receiveSessionErrors(err.responseJSON))
  )
);

export const logout = () => (dispatch) => (
  deleteSession().then(
    () => dispatch(receiveCurrentUser(null)),
    (err) => dispatch(receiveSessionErrors(err.responseJSON))
  )
);
