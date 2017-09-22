import React from 'react';
import SearchIndex from './search_index';

class MusicSearch extends React.Component {
  constructor(props) {
    super(props);
    this.databaseValues = ["empty"];

      let getDatabaseValues = () => (entities) => {
        let obj = Object.assign({}, entities.songs);
        this.databaseValues = Object.values(obj);
      };

    this.props.fetchSongs().then(getDatabaseValues(this.props.entities));

    // this.databaseValues = [];
    this.state = { searchVal: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    const newVal = e.target.value;
    this.setState({ searchVal: newVal }).then(
      this.props.searchDatabse(this.state.searchVal));
  }

  handleClick(e) {
    e.preventDefault();

    console.log("Hello there. Your search is working!");
    // Add logic for pop up modole when working
  }

  render(){
    return (
      <div className="MusicSearch">
        <input onChange={this.handleChange} type="text" value={this.state.searchVal}></input>
        <SearchIndex searchItems={this.databaseValues} />
      </div>
    );
  }
}

export default MusicSearch;
