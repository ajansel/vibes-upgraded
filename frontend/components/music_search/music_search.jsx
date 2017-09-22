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
  //
  // componentDidUpdate() {
  //   let getDatabaseValues = (entities) => {
  //     let obj = Object.assign({}, entities.songs);
  //     return Object.values(obj);
  //   };
  //
  //   this.props.fetchSongs();
  //
  //   this.databaseValues = getDatabaseValues(this.props.entities);
  // }

  handleChange(e) {
    e.preventDefault();

    const newVal = e.target.value;
    this.setState({ searchVal: newVal });
  }

  handleClick(e) {
    e.preventDefault();

    console.log("Hello there. Your search is working!");
    // Add logic for pop up modole when working
  }

  renderList() {
    const listItems = this.databaseValues
    .filter(value => value.toUpperCase()
                    .indexOf(this.state.searchVal.toUpperCase()) !== -1)
    .map((value, idx) => <li key={value + idx}
                            className="SearchIndexItem">{value}</li>);
    return <ul onClick={this.handleClick}>{ listItems }</ul>;
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
