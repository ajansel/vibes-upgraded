import {connect} from 'react-redux';
import PostFeedDashboard from './post_form';
import {fetchPostsFromFollowers} from '../../actions/post_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchPostsFromFollowers: (id) => dispatch(fetchPostsFromFollowers(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostFeedDashboard);
