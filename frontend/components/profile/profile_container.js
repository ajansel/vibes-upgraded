import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Profile from './profile';
import {fetchAlbums, fetchArtist, fetchRandomAlbum} from '../../actions/music_actions';
import {fetchUser, followUser, unfollowUser} from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.userId];
  return {
    currentUser: state.session.currentUser,
    allAlbums: state.entities.albums,
    artist: state.entities.artists,
    userId: ownProps.match.params.userId,
    user: state.entities.users[ownProps.match.params.userId],
    following: user ? user.followed_by_current_user : false,
    albumOfTheDay: Object.values(state.entities.albums)[0]
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchRandomAlbum: () => dispatch(fetchRandomAlbum()),
  fetchAlbums: () => dispatch(fetchAlbums()),
  fetchArtist: (id) => dispatch(fetchArtist(id)),
  fetchUser: (id) => dispatch(fetchUser(id)),
  followUser: (followeeId, currentUserId) => dispatch(followUser(followeeId, currentUserId)),
  unfollowUser: (followeeId, currentUserId) => dispatch(unfollowUser(followeeId, currentUserId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
