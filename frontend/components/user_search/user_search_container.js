import {connect} from 'react-redux';
import UserSearch from './user_search';
import {searchDatabase} from '../../actions/user_actions';
import {followUser, unfollowUser} from '../../actions/user_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const bool = ownProps.location.pathname.includes("profile");
  return {
    currentUser: state.session.currentUser,
    userSearchResults: state.entities.userSearchResults,
    feedType: bool ? "profile" : "dashboard",
    profileUser: bool ? ownProps.location.pathname.slice(9) : null
  };
};

const mapDispatchToProps = (dispatch) => ({
  searchDatabase: (query) => dispatch(searchDatabase(query)),
  followUser: (followeeId, currentUserId, feedType, userId) => dispatch(followUser(followeeId, currentUserId, feedType, userId)),
  unfollowUser: (followeeId, currentUserId, feedType, userId) => dispatch(unfollowUser(followeeId, currentUserId, feedType, userId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserSearch));
