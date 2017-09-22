import {connect} from 'react-redux';
import MusicSearch from './music_search';
import {fetchSongs} from '../../actions/music_actions';

const mapStateToProps = (state) => ({
  entities: state.entities
});

const mapDispatchToProps = (dispatch) => ({
  fetchSongs: () => dispatch(fetchSongs())
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicSearch);
