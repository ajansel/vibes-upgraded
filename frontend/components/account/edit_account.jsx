import React from 'react';
import { Link } from 'react-router-dom';

class EditAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.currentUser,
      errors: [],
      passwordDup: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return (e) => {
      e.preventDefault();
      if (field === "passwordDup" || field === "password") {
        this.setState({[field]: e.target.value});
      } else {
        const user = Object.assign({}, this.state.user);
        user[field] = e.target.value;
        this.setState({ user });
      }
    };
  }

  handleSubmit(formType) {
    return (e) => {
      e.preventDefault();
      // Must be destructured into user_params
      let user;
      if (formType === "update info") {        
        user = Object.assign({}, this.state.user);
        this.props.updateUser(user)
                  .then(() => this.props.history.push("/dashboard"), () => this.setState({errors: []}));
      } else if (formType === "reset password") {        
        if (this.state.password !== this.state.passwordDup) {
          this.setState({ errors: ["Passwords don't match"], user: this.props.currentUser }, () => this.props.clearSessionErrors());
        } else if (this.state.password === "") {
          this.setState({ errors: ["Password can't be blank"], user: this.props.currentUser }, () => this.props.clearSessionErrors());
        } else if (this.state.password.length < 6) {
          this.setState({errors: ["Password is too short (minimum is 6 characters)"]}, () => this.props.clearSessionErrors());
        } else if (this.state.password === this.state.passwordDup) {
          // Because nothing has changed except the password 
          user = Object.assign({}, this.props.currentUser);
          user.password = this.state.password;
          this.props.updateUser(user)
                    .then(() => this.props.history.push("/dashboard"));
        }
      }
      
    };
  }

  render() {
    return (
      <main className="EntirePageContainer-EditPage">
        <div className="SessionFormDiv">
          <form onSubmit={this.handleSubmit("update info")} className="SessionForm">
            <h1>Edit Account</h1>
            <ul className="ErrorsList">
              {this.props.errors.map(
                (err) => (<li key={err}>{err}</li>)
              )}
            </ul>
            <label>
              <input type="text" onChange={this.handleChange("name")}
                placeholder="Full Name" value={this.state.user.name} />
              <br />
              <br />
            </label>
            <label>
              <input type="text" onChange={this.handleChange("username")}
                placeholder="Username" value={this.state.user.username} />
              <br />
              <br />
            </label>
            <label>
              <input type="text" onChange={this.handleChange("email")}
                placeholder="Email" value={this.state.user.email} />
              <br />
              <br />
            </label>
            <div className="SessionButtons-SessionForm">
              <button className="SessionFormSubmit"
                type="submit">Update Info</button>
            </div>
          </form>
          <form onSubmit={this.handleSubmit("reset password")} className="SessionForm">
            <h1>Reset Password</h1>
            <ul className="ErrorsList">
              {this.state.errors.map(
                (err) => (<li key={err}>{err}</li>)
              )}
            </ul>
            <label>
              <input type="password" onChange={this.handleChange("password")}
                placeholder="New Password" value={this.state.user.password} />
              <br />
              <br />
            </label>
            <label>
              <input type="password" onChange={this.handleChange("passwordDup")}
                placeholder="Re-enter Password" value={this.state.user.passwordDup} />
              <br />
              <br />
            </label>
            <div className="SessionButtons-SessionForm">
              <button className="SessionFormSubmit"
                type="submit">Update Info</button>
            </div>
          </form>
        </div>
      </main>
    );
  }
}

export default EditAccount;
