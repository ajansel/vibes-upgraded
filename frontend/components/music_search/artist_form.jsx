import React from 'react';
import { Link } from 'react-router-dom';

class ArtistForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount(){
    this.props.fetchSongsByArtist(this.props.artist.id);
  }

  handleClick(song) {
    return(e) => {
      e.preventDefault();
      this.props.closeArtistModal("artist", song);
    };
  }

  render(){
    const songs = Object.values(this.props.songs).map(
      (song) => <div key={song.id} onClick={this.handleClick(song)}>{song.title}<br /></div>
    );

    return (
      <div className="ArtistForm">
        <div className="UserInfo">
          <Link to={`/profile/${this.props.currentUser.id}`}><img src={this.props.currentUser.img_url}/></Link>
          <div className="UserNames">
            <Link to={`/profile/${this.props.currentUser.id}`}><p>{this.props.currentUser.name}</p>
            <p>{"@" + this.props.currentUser.username}</p></Link>
          </div>
        </div>
        <p>{this.props.artist.name}</p>
        <div className="Songs" >
          {songs}
        </div>
      </div>
    );
  }
}

export default ArtistForm;
