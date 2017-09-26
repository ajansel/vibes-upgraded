import React from 'react';
import SearchIndex from './search_index';

class MusicSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchVal: '', firstTime: true };
    this.handleChange = this.handleChange.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    const newVal = e.target.value;
    this.setState({ searchVal: newVal, firstTime: false }, () => {
      this.props.searchDatabase(this.state.searchVal);
    });
  }

  clearState() {
    this.setState({ searchVal: '', firstTime: false });
  }

  render(){
    return (
      <div className="MusicSearch">
        <input onChange={this.handleChange} type="text"
          placeholder="Search for a song, artist, or album"
          value={this.state.searchVal}></input>
        <SearchIndex firstTime={this.state.firstTime}
          searchItems={Object.values(this.props.searchResults)}
          searchVal={this.state.searchVal}
          currentUser={this.props.currentUser}
          clearState={this.clearState} />
      </div>
    );
  }
}

export default MusicSearch;
