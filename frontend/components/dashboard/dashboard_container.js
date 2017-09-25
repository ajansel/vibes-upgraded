import {connect} from 'react-redux';
import Dashboard from './dashboard';
import {fetchAlbums, fetchArtist} from '../../actions/music_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    allAlbums: state.entities.albums,
    artist: state.entities.artists,
    params: ownProps.match.params
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAlbums: () => dispatch(fetchAlbums()),
  fetchArtist: (id) => dispatch(fetchArtist(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
