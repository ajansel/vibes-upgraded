import React from 'react';
import SearchIndexItem from './search_index_item';

export default ({searchItems, firstTime, searchVal, currentUser}) => {
  if (searchVal === "") return null;
  let songs = [];
  let artists = [];
  let albums = [];

  searchItems.forEach(
    (item) => {
      if (item.type === "song") {
        songs.push(item);
      } else if (item.type === "artist") {
        artists.push(item);
      } else if (item.type === "album") {
        albums.push(item);
      }
    }
  );

  let songsUl;
  let artistsUl;
  let albumsUl;
  let songsHeader;
  let artistsHeader;
  let albumsHeader;

  if (firstTime === false) songsHeader = <h3>Songs</h3>;
  if (songs.length !== 0) {
    songsUl =
    <ul>
      <li className="Header">Song Results:</li>
      {songs.map(
        (item) => (<SearchIndexItem currentUser={currentUser}
          item={item} key={item.id}/>)
      )}
    </ul>;
  } else if (firstTime === false){
    songsUl =
    <ul>
      <li className="Header">Song Results:</li>
      <li>No matchings songs</li>
    </ul>;
  }

  if (firstTime === false) artistsHeader = <h3>Artists</h3>;
  if (artists.length !== 0) {
    artistsUl =
    <ul>
      <li className="Header">Artist Results:</li>
      {artists.map(
        (item) => (<SearchIndexItem currentUser={currentUser}
          item={item} key={item.id}/>)
      )}
    </ul>;
  } else if (firstTime === false){
    artistsUl =
    <ul>
      <li className="Header">Artist Results:</li>
      <li>No matchings artists</li>
    </ul>;
  }

  if (firstTime === false) albumsHeader = <h3>Albums</h3>;
  if (albums.length !== 0) {
    albumsUl =
    <ul>
      <li className="Header">Album Results:</li>
      {albums.map(
        (item) => (<SearchIndexItem currentUser={currentUser}
          item={item} key={item.id}/>)
      )}
    </ul>;
  } else if (firstTime === false){
    albumsUl =
    <ul>
      <li className="Header">Album Results:</li>
      <li>No matchings albums</li>
    </ul>;
  }

  return(
    <div className="SearchIndex">
      {songsUl}
      {artistsUl}
      {albumsUl}
    </div>
  );
};
