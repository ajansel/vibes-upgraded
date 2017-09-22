import React from 'react';
import Modal from 'react-modal';
import PostForm from '../post/post_form';

const customStyles = {
  content : {
    top                   : '56%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '500px',
    height                : '500px'
  },
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)',
  }
};

class SearchIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.currentUser = props.currentUser;
    this.state = { modalIsOpen: false };
    this.item = props.item;
    this.openModal = this.openModal.bind(this);
    this.afterModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  afterOpenModal() {

  }

  render() {
    let li;
    if (this.item.type === 'artist') {
      li = <li onClick={this.openModal}>{this.item.name}</li>;
    } else {
      li = <li onClick={this.openModal}>{this.item.title}</li>;
    }

    let form;
    if (this.item.type === 'song') {
      form = <PostForm currentUser={this.props.currentUser}
                        song={this.props.item}/>;
    } else if (this.item.type === 'artist') {
      form = <p>Change this to artist modal</p>;
    } else if (this.item.type === 'album') {
      form = <p>Change this to album modal</p>;
    }

    return(
      <div>
        {li}
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          style={customStyles}
          >
          {form}
        </Modal>
      </div>
    );
  }
}

export default SearchIndexItem;
