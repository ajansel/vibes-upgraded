import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// DELETE THIS LATER
// import * as ApiUtil from './util/session_api_util';
import {signup, login, logout} from './actions/session_actions';
// DELETE THIS LATER

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  // DELETE THIS LATER
  // let user = { username: 'jonsnow', password: 'password', name: 'Jon Snow',
  //       email: 'jonsnow@gmail.com',
  //       img_url:'https://openclipart.org/download/269638/lowercase-v.svg'};
  //
  // window.user = user;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.signup = signup;
  // window.login = login;
  // window.logout = logout;

// DELETE THIS LATER

  ReactDOM.render(<Root store={store} />, root);
});
