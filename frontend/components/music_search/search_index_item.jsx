import React from 'react';
import Modal from 'react-modal';
import PostFormContainer from '../post/post_form_container';
import ArtistFormContainer from './artist_form_container';

const customStyles = {
  content : {
    top                   : '56%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '500px',
    height                : '500px',
    // overflow              : 'hidden'
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
    this.state = { songModalIsOpen: false, artistModalIsOpen: false };
    this.item = props.item;
    this.openSongModal = this.openSongModal.bind(this);
    this.closeSongModal = this.closeSongModal.bind(this);
    this.openArtistModal = this.openArtistModal.bind(this);
    this.closeArtistModal = this.closeArtistModal.bind(this);
  }

  openSongModal(fromForm, song) {
    this.setState({songModalIsOpen: true}, () => {
      if(fromForm === "artist") {
        this.item = song;
      }
    });
  }

  closeSongModal() {
    this.setState({songModalIsOpen: false});
  }

  openArtistModal() {
    this.setState({artistModalIsOpen: true});
  }

  closeArtistModal(fromForm, song) {
    this.setState({artistModalIsOpen: false}, () => {
      if(fromForm === "artist") {
        this.item = song;
        this.setState({songModalIsOpen: true});
      }
    });
  }

  render() {
    let li;
    if (this.item.type === 'song') {
      li = <li onClick={this.openSongModal}>{this.item.title}</li>;
    } else if (this.item.type === 'artist') {
      li = <li onClick={this.openArtistModal}>{this.item.name}</li>;
    } else if (this.item.type === 'album'){
      li = <li onClick={this.openArtistModal}>{this.item.title}</li>;
    }

    let form;
    if (this.item.type === 'song') {
      form = <PostFormContainer currentUser={this.props.currentUser}
                        song={this.item} closeSongModal={this.closeSongModal}/>;
    } else if (this.item.type === 'artist') {
      form = <ArtistFormContainer currentUser={this.props.currentUser}
                        artist={this.props.item} closeArtistModal={this.closeArtistModal}
                        openSongModal={this.openSongModal}/>;
    } else if (this.item.type === 'album') {
      form = <p>Change this to album modal</p>;
    }

    return(
      <div>
        {li}
        <Modal
          isOpen={this.state.songModalIsOpen}
          onRequestClose={this.closeSongModal}
          contentLabel="Example Modal"
          style={customStyles}
          >
          {form}
        </Modal>

        <Modal
          isOpen={this.state.artistModalIsOpen}
          onRequestClose={this.closeArtistModal}
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
