import { connect } from 'react-redux';
import { receiveSessionErrors } from '../../actions/session_actions';
import EditAccount from './edit_account';
import { withRouter } from 'react-router-dom';
import {updateUser} from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateUser: (user) => dispatch(updateUser(user)),
  clearSessionErrors: () => dispatch(receiveSessionErrors([])),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditAccount)
);
