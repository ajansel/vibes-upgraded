import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: '', password: '',
      name: '', email: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit() {
    return (e) => {
      e.preventDefault();
      // Must be destructured into user_params
      const user = Object.assign({}, this.state);
      this.props.processForm(user).then(() => this.props.history.push("/dashboard"));
    };
  }

  handleChange(field) {
    return (e) => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }

  componentWillUpdate(newprops){
    if (this.props.match.path !== newprops.match.path) {
      this.props.receiveSessionErrors();
    }
  }

  handleClick() {
    const demoUser = { username: 'jonsnow', password: 'password' };
    this.props.login(demoUser).then(() => this.props.history.push("/dashboard"));
  }

  render(){
    const headerText = this.props.formType === 'login' ?
                    <h1>Log In</h1> : <h1>Create Account</h1>;

    let welcomeMessage = undefined;
    if (this.props.formType === 'signup') {
      welcomeMessage=
      <div className="WelcomeMessage">
          <h1>Welcome to Vibes</h1>
          <p> Search for your favorite song, highlight the snippet of
            lyrics that fit your vibe, and click post. It’s fast,
            easy, and free!  </p>
      </div>;
    } else {
      welcomeMessage=
      <div className="WelcomeMessage">
          <h1>Welcome back</h1>
          <p>Sign in to see what's new!</p>
      </div>;
    }

    let fullName = undefined;
    if (this.props.formType === 'signup') {
      fullName=
      <label>
        <input type="text" onChange={this.handleChange("name")}
          placeholder="Full Name" value={this.state.name}/>
        <br />
        <br />
      </label>;
    }

    let email = undefined;
    if (this.props.formType === 'signup') {
      email=
        <label>
        <input type="text" onChange={this.handleChange("email")}
               placeholder="Email" value={this.state.email}/>
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

    const renderErrors =
      <ul className="ErrorsList">
          {this.props.errors.map(
            (err) => (<li key={err}>{err}</li>)
          )}
      </ul>;

    return (
      <main className="EntirePageContainer">
        <div className="SessionFormDiv">
          {welcomeMessage}
          <form onSubmit={this.handleSubmit()} className="SessionForm">
            {headerText}
            {renderErrors}
            {fullName}
            <label>
              <input type="text" onChange={this.handleChange("username")}
                placeholder="Username"value={this.state.username}/>
              <br />
              <br />
            </label>
            {email}
            <label>
              <input type="password" onChange={this.handleChange("password")}
                placeholder="Password" value={this.state.password}/>
              <br />
              <br />
            </label>
            <div className="SessionButtons-SessionForm">
              <button className="SessionFormSubmit"
                type="submit">{buttonText}</button>
              <a className="DemoButton" onClick={this.handleClick}>See Demo</a>
            </div>
          </form>
        </div>
      </main>
    );
  }
}

export default withRouter(SessionForm);
