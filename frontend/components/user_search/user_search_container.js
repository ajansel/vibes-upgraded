import {connect} from 'react-redux';
import UserSearch from './user_search';
import {searchDatabase} from '../../actions/user_actions';
import {followUser, unfollowUser} from '../../actions/user_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  userSearchResults: state.entities.userSearchResults
});

const mapDispatchToProps = (dispatch) => ({
  searchDatabase: (query) => dispatch(searchDatabase(query)),
  followUser: (followeeId, currentUserId) => dispatch(followUser(followeeId, currentUserId)),
  unfollowUser: (followeeId, currentUserId) => dispatch(unfollowUser(followeeId, currentUserId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSearch);
