import {connect} from 'react-redux';
import Homepage from './homepage';
import {login} from '../../actions/session_actions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
