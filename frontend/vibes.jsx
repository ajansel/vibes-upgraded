import React from 'react';
import ReactDOM from 'react-dom';

// DELETE THIS LATER
import {getUsers, postUser, postSession, deleteSession} from './util/session_api_util';
// import {signup, login, logout} from './actions/session_actions';
// import {getBenches, postBench} from './util/bench_api_util';
// import {fetchBenches} from './actions/bench_actions';
// DELETE THIS LATER

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  // DELETE THIS LATER
  let user = { username: 'jonsnow', password: 'password', name: 'Jon Snow',
        email: 'jonsnow@gmail.com',
        img_url:'https://openclipart.org/download/269638/lowercase-v.svg'};

  window.user = user;
  window.postUser = postUser;
  window.getUsers = getUsers;
  window.postSession = postSession;
  window.deleteSession = deleteSession;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.signup = signup;
  // window.login = login;
  // window.logout = logout;
  // window.getBenches = getBenches;
  // window.postBench = postBench;
  // window.fetchBenches = fetchBenches;
// DELETE THIS LATER

  ReactDOM.render(<h1>Welcome to vibes</h1>, root);
});
