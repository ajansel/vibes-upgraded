import {combineReducers} from 'redux';
import { ArtistsReducer, AlbumsReducer, SongsReducer, SearchReducer } from './music_reducers';

const EntitiesReducer = combineReducers({
  artists: ArtistsReducer,
  albums: AlbumsReducer,
  songs: SongsReducer,
  searchResults: SearchReducer
});

export default EntitiesReducer;
