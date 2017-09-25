import {connect} from 'react-redux';
import AlbumForm from './album_form';
import {fetchSongsByAlbum} from '../../actions/music_actions';

const mapStateToProps = (state) => ({
  // currentUser: state.session.currentUser,
  songs: state.entities.songs
});

const mapDispatchToProps = (dispatch) => ({
  fetchSongsByAlbum: (id) => dispatch(fetchSongsByAlbum(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumForm);
