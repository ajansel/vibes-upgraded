import React from 'react';
// import Modal from 'react-modal';
// import PostFormContainer from '../post/post_form_container';
//
// const customStyles = {
//   content : {
//     top                   : '56%',
//     left                  : '50%',
//     right                 : 'auto',
//     bottom                : 'auto',
//     marginRight           : '-50%',
//     transform             : 'translate(-50%, -50%)',
//     width                 : '500px',
//     height                : '500px',
//     // overflow              : 'hidden'
//   },
//   overlay : {
//     position          : 'fixed',
//     top               : 0,
//     left              : 0,
//     right             : 0,
//     bottom            : 0,
//     backgroundColor   : 'rgba(255, 255, 255, 0.75)',
//   }
// };

class UserSearchIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.currentUser = props.currentUser;
    // this.state = { modalIsOpen: false };
    this.user = props.user;
    // this.openModal = this.openModal.bind(this);
    // this.afterModal = this.afterOpenModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
  }

  // openModal() {
  //   this.setState({modalIsOpen: true});
  // }
  //
  // closeModal() {
  //   this.setState({modalIsOpen: false});
  // }
  //
  // afterOpenModal() {
  //
  // }

  render() {
    // let li;
    // if (this.user.type === 'artist') {
    //   li = <li onClick={this.openModal}>{this.user.name}</li>;
    // } else {
    //   li = <li onClick={this.openModal}>{this.user.title}</li>;
    // }

    // let form;
    // if (this.user.type === 'song') {
    //   form = <PostFormContainer currentUser={this.props.currentUser}
    //                     song={this.props.user} closeModal={this.closeModal}/>;
    //                 } else if (this.user.type === 'artist') {
    //   form = <p>Change this to artist modal</p>;
    // } else if (this.user.type === 'album') {
    //   form = <p>Change this to album modal</p>;
    // }

    let followButton;
    if (this.user.followed_by_current_user) {
      // Unfollow button
      followButton = <button>Unfollow</button>;
    } else {
      // follow button
      followButton = <button>Follow</button>;
    }

    return(
      <div>
        <li>
          {this.user.username}
          {followButton}
        </li>
      </div>
    );
  }
}

export default UserSearchIndexItem;
