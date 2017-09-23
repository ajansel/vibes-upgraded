import {combineReducers} from 'redux';
import { ArtistsReducer, AlbumsReducer, SongsReducer, SearchReducer } from './music_reducers';
import PostsReducer from './posts_reducer';

const EntitiesReducer = combineReducers({
  artists: ArtistsReducer,
  albums: AlbumsReducer,
  songs: SongsReducer,
  searchResults: SearchReducer,
  posts: PostsReducer
});

export default EntitiesReducer;
