import React from 'react';
import { Link } from 'react-router-dom';
import MusicSearchContainer from '../music_search/music_search_container';
import UserSearchContainer from '../user_search/user_search_container';
import PostFeedDashboardContainer from '../post/post_feed_dashboard_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {albumOfTheDay: {}, artist: ""};
  }

  componentDidMount() {
    this.props.fetchAlbums().then(() => {
      const albumOfTheDay = this.getRandomAlbum();
        this.setState({albumOfTheDay}, () => {
          this.props.fetchArtist(this.state.albumOfTheDay.artist_id).then(() => {
            this.setState({artist: Object.values(this.props.artist)[0]});
          });
        });
      });
  }

  getRandomAlbum() {
    const albumsArr = Object.values(this.props.allAlbums);
    return albumsArr[Math.floor(Math.random() * albumsArr.length)];
  }

  render(){
    return (
      <div className="Dashboard">
        <div className="UserWidget">
          <Link to={`/profile/${this.props.currentUser.id}`}><img className="DashboardPic" src={this.props.currentUser.img_url}/></Link>
          <Link to={`/profile/${this.props.currentUser.id}`}><p className="Name">{this.props.currentUser.name}</p>
          <p className="Name">{"@" + this.props.currentUser.username}</p></Link>
          <div className="StatHeaders">
            <p>Posts</p>
            <p>Followers</p>
            <p>Following</p>
          </div>
          <div className="Stats">
            <p>30</p>
            <p>406</p>
            <p>384</p>
          </div>
        </div>
        <div className="SearchAndFeed">
          <div className="MusicSearch">
            <MusicSearchContainer />
            <UserSearchContainer />
          </div>
          <div className="Feed">
            <p>Test Feed</p>
            <PostFeedDashboardContainer params={this.props.params}
              feedType={"dashboard"} />
          </div>
        </div>
        <div className="BonusWidget">
          <p className="SuggestedAlbum">Suggested Album</p>
          <img className="SuggestedAlbumPic" src={this.state.albumOfTheDay.img_url}/>
          <p className="SuggestedAlbumTitle">Title: {this.state.albumOfTheDay.title}</p>
          <p className="SuggestedAlbumArtist">Artist: {this.state.artist.name}</p>
        </div>
      </div>
    );
  }
}

export default Dashboard;
