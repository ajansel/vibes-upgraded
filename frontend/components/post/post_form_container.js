import {connect} from 'react-redux';
import PostForm from './post_form';
import {createPost, updatePost} from '../../actions/post_actions';

const mapStateToProps = (state) => ({
  // currentUser: state.session.currentUser,
  // searchResults: state.entities.searchResults
});

const mapDispatchToProps = (dispatch) => ({
  createPost: (post) => dispatch(createPost(post)),
  updatePost: (post) => dispatch(updatePost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
