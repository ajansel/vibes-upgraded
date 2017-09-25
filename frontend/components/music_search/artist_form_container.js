import {connect} from 'react-redux';
import ArtistForm from './artist_form';
import {fetchSongsByArtist} from '../../actions/music_actions';

const mapStateToProps = (state) => ({
  // currentUser: state.session.currentUser,
  songs: state.entities.songs
});

const mapDispatchToProps = (dispatch) => ({
  fetchSongsByArtist: (id) => dispatch(fetchSongsByArtist(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistForm);
