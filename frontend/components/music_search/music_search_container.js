import {connect} from 'react-redux';
import MusicSearch from './music_search';
import {searchDatabase} from '../../actions/music_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  searchResults: state.entities.searchResults
});

const mapDispatchToProps = (dispatch) => ({
  searchDatabase: (query) => dispatch(searchDatabase(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicSearch);
