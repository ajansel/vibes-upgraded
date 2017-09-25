import React from 'react';
import { Link } from 'react-router-dom';
import UserSearchContainer from '../user_search/user_search_container';
import PostFeedDashboardContainer from '../post/post_feed_dashboard_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {albumOfTheDay: {}, artist: "", user: this.props.user};
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

  componentWillReceiveProps(newProps){
    if(this.props.match.params.userId !== newProps.match.params.userId){
      this.props.fetchUser(newProps.match.params.userId).then(
      (res) => {
        this.setState({user: res.user});
      });
    }
  }

  componentWillMount(){
    this.props.fetchUser(this.props.userId).then(
    (res) => this.setState({user: res.user}));
  }

  getRandomAlbum() {
    const albumsArr = Object.values(this.props.allAlbums);
    return albumsArr[Math.floor(Math.random() * albumsArr.length)];
  }

  render(){
    if (!this.state.user) return null;
    return (
      <div className="Dashboard">
        <div className="UserWidget">
          <img className="DashboardPic" src={this.state.user.img_url}/>
          <p className="Name">{this.state.user.name}</p>
          <p className="Name">{"@" + this.state.user.username}</p>
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
            <UserSearchContainer />
          </div>
          <div className="Feed">
            <p>Test Feed</p>
            <PostFeedDashboardContainer userId={this.state.user.id}
              feedType={"profile"}/>
          </div>
        </div>
        <div className="BonusWidget">
          <p className="SuggestedAlbum">Suggested Album</p>
          <img className="SuggestedAlbumPic" src={this.state.albumOfTheDay.img_url}/>
          <p className="SuggestedAlbumTitle">Title: {this.state.albumOfTheDay.title}</p>
          <p className="SuggestedAlbumArtist">By: {this.state.artist.name}</p>
        </div>
      </div>
    );
  }
}

export default Profile;
