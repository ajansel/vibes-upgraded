import {connect} from 'react-redux';
import Profile from './profile';
import {fetchAlbums, fetchArtist} from '../../actions/music_actions';
import {fetchUser, followUser, unfollowUser} from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    allAlbums: state.entities.albums,
    artist: state.entities.artists,
    userId: ownProps.match.params.userId,
    user: state.entities.users[ownProps.match.params.userId]
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAlbums: () => dispatch(fetchAlbums()),
  fetchArtist: (id) => dispatch(fetchArtist(id)),
  fetchUser: (id) => dispatch(fetchUser(id)),
  followUser: (followeeId) => dispatch(followUser(followeeId)),
  unfollowUser: (followeeId) => dispatch(unfollowUser(followeeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
