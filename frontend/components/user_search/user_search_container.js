import {connect} from 'react-redux';
import UserSearch from './user_search';
import {searchDatabase} from '../../actions/user_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  userSearchResults: state.entities.userSearchResults
});

const mapDispatchToProps = (dispatch) => ({
  searchDatabase: (query) => dispatch(searchDatabase(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSearch);
