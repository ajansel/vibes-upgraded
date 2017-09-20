import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: '', password: '',
      name: '', email: '',
      img_url:'https://openclipart.org/download/269638/lowercase-v.svg'
    };

    this.processForm = this.props.processForm;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    return (e) => {
      e.preventDefault();
      // Must be destructured into user_params
      const user = Object.assign({}, this.state);
      this.processForm(user);
    };
  }

  handleChange(field) {
    return (e) => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }

  render(){
    const headerText = this.props.formType === 'login' ?
                    "Log In" : "Create a New Account";

    let fullName = undefined;
    if (this.props.formType === 'signup') {
      fullName=
      <label>Full Name:
        <br />
        <input type="text" onChange={this.handleChange("name")}
          value={this.state.name}/>
        <br />
        <br />
      </label>;
    }

    let email = undefined;
    if (this.props.formType === 'signup') {
      email=
      <label>Email:
        <br />
        <input type="text" onChange={this.handleChange("email")}
               value={this.state.email}/>
        <br />
        <br />
     </label>;
    }

    const link = this.props.formType === 'login' ?
      <Link to='/signup'>Sign Up</Link> :
      <Link to='/login'>Log In</Link>;

    const buttonText = this.props.formType === 'signup' ?
      "Create Account" :
      "Log In";

    return (
      <div>
        <form onSubmit={this.handleSubmit()} className="sessionForm">
          {headerText}
          <br />
          <br />
          {fullName}
          <label>Username:
            <br />
            <input type="text" onChange={this.handleChange("username")}
              value={this.state.username}/>
            <br />
            <br />
          </label>
          {email}
          <label>Password:
            <br />
            <input type="password" onChange={this.handleChange("password")}
              value={this.state.password}/>
            <br />
            <br />
          </label>
          <input type="submit" value={buttonText} />
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
