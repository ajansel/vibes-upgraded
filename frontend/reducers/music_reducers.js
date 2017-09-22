import {RECEIVE_ARTIST, RECEIVE_ARTISTS, RECEIVE_ALBUM, RECEIVE_ALBUMS,
        RECEIVE_SONG, RECEIVE_SONGS, RECEIVE_SEARCH_RESULTS}
        from '../actions/music_actions';

export const ArtistsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ARTIST:
      newState = Object.assign({}, state);
      newState[action.artist.id] = action.artist;
      return newState;
    case RECEIVE_ARTISTS:
      return action.artists;
    default:
      return state;
  }
};

export const AlbumsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALBUM:
      newState = Object.assign({}, state);
      newState[action.album.id] = action.album;
      return newState;
    case RECEIVE_ALBUMS:
      return action.albums;
    default:
      return state;
  }
};

export const SongsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_SONG:
      newState = Object.assign({}, state);
      newState[action.songs.id] = action.songs;
      return newState;
    case RECEIVE_SONGS:
      return action.songs;
    default:
      return state;
  }
};

export const SearchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.searchResults;
    default:
      return state;
  }
};
