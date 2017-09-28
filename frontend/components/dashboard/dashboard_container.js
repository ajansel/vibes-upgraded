import {connect} from 'react-redux';
import Dashboard from './dashboard';
import {fetchAlbums, fetchArtist, fetchRandomAlbum} from '../../actions/music_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    allAlbums: state.entities.albums,
    params: ownProps.match.params,
    albumOfTheDay: Object.values(state.entities.albums)[0]
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchRandomAlbum: () => dispatch(fetchRandomAlbum()),
  fetchAlbums: () => dispatch(fetchAlbums()),
  fetchArtist: (id) => dispatch(fetchArtist(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
