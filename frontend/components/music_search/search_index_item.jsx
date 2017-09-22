import React from 'react';
import Modal from 'react-modal';

class SearchIndexItem extends React.Component {
  constructor(props) {
    super(props);

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

  handleClick(e){
    e.preventDefault();

    console.log("Hello there. Your search is working!");
    // Add logic for pop up modole when working
  }

  render() {
    let li;
    if (this.item.type === 'artist') {
      li = <li onClick={this.openModal}>{this.item.name}</li>;
    } else {
      li = <li onClick={this.openModal}>{this.item.title}</li>;
    }

    return(
      <div>
        {li}
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          >
          <p>Hello there. Your search is working! </p>
        </Modal>
      </div>
    );
  }
}

export default SearchIndexItem;

// export default ({item}) => {
//   const handleClick = (e) => {
//     e.preventDefault();
//
//     console.log("Hello there. Your search is working!");
//     // Add logic for pop up modole when working
//   };
//
//   if (item.type === 'artist'){
//     return <li onClick={handleClick}>{item.name}</li>;
//   } else {
//     return <li onClick={handleClick}>{item.title}</li>;
//   }
// };
