import {combineReducers} from 'redux';
import { ArtistsReducer, AlbumsReducer, SongsReducer, SearchReducer } from './music_reducers';
import PostsReducer from './posts_reducer';
import UserSearchReducer from './user_search_reducer';
import UsersReducer from './users_reducer';
import ChatsReducer from './chats_reducer';
import MessagesReducer from './messages_reducer';

const EntitiesReducer = combineReducers({
  artists: ArtistsReducer,
  albums: AlbumsReducer,
  songs: SongsReducer,
  searchResults: SearchReducer,
  posts: PostsReducer,
  userSearchResults: UserSearchReducer,
  users: UsersReducer,
  chats: ChatsReducer,
  messages: MessagesReducer
});

export default EntitiesReducer;
