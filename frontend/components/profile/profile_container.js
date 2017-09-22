import {connect} from 'react-redux';
import Profile from './profile';
import {fetchAlbums, fetchArtist} from '../../actions/music_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  allAlbums: state.entities.albums,
  artist: state.entities.artists
});

const mapDispatchToProps = (dispatch) => ({
  fetchAlbums: () => dispatch(fetchAlbums()),
  fetchArtist: (id) => dispatch(fetchArtist(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
