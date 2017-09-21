export const getArtist = (artistId) => {
  return $.ajax({
    method: 'GET',
    url: `api/artist/${artistId}`
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