import {getArtist, getArtists, getAlbum, getAlbums, getSong, getSongs,
    searchMusicDatabase, getSongsByArtist}
    from '../util/music_api_util';

export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";

const receiveArtist = (artist) => ({
  type: RECEIVE_ARTIST,
  artist
});

const receiveArtists = (artists) => ({
  type: RECEIVE_ARTISTS,
  artists
});

const receiveAlbum = (album) => ({
  type: RECEIVE_ALBUM,
  album
});

const receiveAlbums = (albums) => ({
  type: RECEIVE_ALBUMS,
  albums
});

const receiveSong = (song) => ({
  type: RECEIVE_SONG,
  song
});

const receiveSongs = (songs) => ({
  type: RECEIVE_SONGS,
  songs
});

const receiveSearchResults = (searchResults) => ({
  type: RECEIVE_SEARCH_RESULTS,
  searchResults
});

export const fetchArtist = (artistId) => (dispatch) => (
  getArtist(artistId).then(
    (artist) => dispatch(receiveArtist(artist))
  )
);

export const fetchArtists = () => (dispatch) => (
  getArtists().then(
    (artists) => dispatch(receiveArtists(artists))
  )
);

export const fetchAlbum = (albumId) => (dispatch) => (
  getAlbum(albumId).then(
    (album) => dispatch(receiveAlbum(album))
  )
);

export const fetchAlbums = () => (dispatch) => (
  getAlbums().then(
    (albums) => dispatch(receiveAlbums(albums))
  )
);

export const fetchSong = (songId) => (dispatch) => (
  getSong(songId).then(
    (song) => dispatch(receiveSong(song))
  )
);

export const fetchSongs = () => (dispatch) => (
  getSongs().then(
    (songs) => dispatch(receiveSongs(songs))
  )
);

export const searchDatabase = (query) => (dispatch) => (
  searchMusicDatabase(query).then(
    (results) => dispatch(receiveSearchResults(results))
  )
);

export const fetchSongsByArtist = (id) => (dispatch) => (
  getSongsByArtist(id).then(
    (songs) => dispatch(receiveSongs(songs))
  )
);
