import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import {fetchArtist, fetchArtists, fetchAlbum, fetchAlbums,
        fetchSong, fetchSongs, searchDatabase}
        from './actions/music_actions';

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
  window.getState = store.getState;
  window.fetchArtist = fetchArtist;
  window.fetchArtists = fetchArtists;
  window.fetchAlbum = fetchAlbum;
  window.fetchAlbums = fetchAlbums;
  window.fetchSong = fetchSong;
  window.fetchSongs = fetchSongs;
  window.searchDatabase = searchDatabase;

  // DELETE LATER

  ReactDOM.render(<Root store={store} />, root);
});
