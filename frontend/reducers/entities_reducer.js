import {combineReducers} from 'redux';
import { ArtistsReducer, AlbumsReducer, SongsReducer } from './music_reducers';

const EntitiesReducer = combineReducers({
  artists: ArtistsReducer,
  albums: AlbumsReducer,
  songs: SongsReducer
});

export default EntitiesReducer;
