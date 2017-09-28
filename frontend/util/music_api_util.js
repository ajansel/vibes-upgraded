export const getArtist = (artistId) => {
  return $.ajax({
    method: 'GET',
    url: `api/artists/${artistId}`
  });
};

export const getArtists = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/artists'
  });
};

export const getAlbum = (albumId) => {
  return $.ajax({
    method: 'GET',
    url: `api/albums/${albumId}`
  });
};

export const getAlbums = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/albums'
  });
};

export const getSong = (songId) => {
  return $.ajax({
    method: 'GET',
    url: `api/songs/${songId}`
  });
};

export const getSongs = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/songs'
  });
};

export const searchMusicDatabase = (query) => {
  return $.ajax({
    method: 'GET',
    url: 'api/music_searches',
    data: {search: { query } }
  });
};

export const getSongsByArtist = (id) => {
  return $.ajax({
    method: 'GET',
    url: 'api/music_searches/songs_by_artist',
    data: { search: {artist_id: id} }
  });
};

export const getSongsByAlbum = (id) => {
  return $.ajax({
    method: 'GET',
    url: 'api/music_searches/songs_by_album',
    data: { search: {album_id: id} }
  });
};

export const getRandomAlbum = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/music_searches/random_album'
  });
};
