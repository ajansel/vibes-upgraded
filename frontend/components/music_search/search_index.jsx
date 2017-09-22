import React from 'react';
import SearchIndexItem from './search_index_item';

export default ({searchItems, firstTime, searchVal, currentUser}) => {
  if (searchVal === "") return (<ul></ul>);
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
      {songs.map(
        (item) => (<SearchIndexItem currentUser={currentUser}
          item={item} key={item.id}/>)
      )}
    </ul>;
  } else if (firstTime === false){
    songsUl =
    <ul>
      <li>No matchings songs</li>
    </ul>;
  }

  if (firstTime === false) artistsHeader = <h3>Artists</h3>;
  if (artists.length !== 0) {
    artistsUl =
    <ul>
      {artists.map(
        (item) => (<SearchIndexItem currentUser={currentUser}
          item={item} key={item.id}/>)
      )}
    </ul>;
  } else if (firstTime === false){
    artistsUl =
    <ul>
      <li>No matchings artists</li>
    </ul>;
  }

  if (firstTime === false) albumsHeader = <h3>Albums</h3>;
  if (albums.length !== 0) {
    albumsUl =
    <ul>
      {albums.map(
        (item) => (<SearchIndexItem currentUser={currentUser}
          item={item} key={item.id}/>)
      )}
    </ul>;
  } else if (firstTime === false){
    albumsUl =
    <ul>
      <li>No matchings albums</li>
    </ul>;
  }

  return(
    <div className="SearchIndex">
      {songsHeader}
      {songsUl}
      {artistsHeader}
      {artistsUl}
      {albumsHeader}
      {albumsUl}
    </div>
  );
};
