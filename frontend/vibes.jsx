import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import {fetchArtist, fetchArtists, fetchAlbum, fetchAlbums,
  fetchSong, fetchSongs} from './actions/music_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const preloadedState = {};

  if (window.currentUser) {
    preloadedState.session = { currentUser: window.currentUser };
    delete window.currentUser;
  }

  const store = configureStore(preloadedState);

  // DELETE LATER
  window.dispatch = store.dispatch;
  window.getState = store.dispatch;
  window.fetchArtist = fetchArtist;
  window.fetchArtists = fetchArtists;
  window.fetchAlbum = fetchAlbum;
  window.fetchAlbums = fetchAlbums;
  window.fetchSong = fetchSong;
  window.fetchSongs = fetchSongs;

  // DELETE LATER

  ReactDOM.render(<Root store={store} />, root);
});
