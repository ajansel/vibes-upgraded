import React from 'react';
import { Link } from 'react-router-dom';
import UserSearchContainer from '../user_search/user_search_container';
import PostFeedDashboardContainer from '../post/post_feed_dashboard_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {albumOfTheDay: {}, artist: "", user: this.props.user};
    this.currentUser = props.currentUser;
    this.user = props.user;
    this.followUser = props.followUser;
    this.unfollowUser = props.unfollowUser;
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
        this.setState({user: res.user, following: res.user.followed_by_current_user});
      });
    }
  }

  componentWillMount(){
    this.props.fetchUser(this.props.userId).then(
    (res) => this.setState({user: res.user, following: res.user.followed_by_current_user}));
  }

  getRandomAlbum() {
    const albumsArr = Object.values(this.props.allAlbums);
    return albumsArr[Math.floor(Math.random() * albumsArr.length)];
  }

  handleClick(action) {
    return (e) => {
      e.preventDefault();
      if (this.currentUser && action === "follow") {
        let oppositeCurrentFollowing = !this.state.following;
        this.setState({ following: oppositeCurrentFollowing}, () => {
          this.followUser(this.state.user.id);
        });
      } else if (this.currentUser) {
        let oppositeCurrentFollowing = !this.state.following;
        this.setState({ following: oppositeCurrentFollowing}, () => {
          this.unfollowUser(this.state.user.id);
        });
      }
    };
  }

  render(){
    if (!this.state.user) return null;

    let followButton;
    if (this.currentUser && this.state.user.id === this.currentUser.id) {
      followButton = undefined;
    } else if (this.state.following) {
      // Unfollow button
      followButton = <button className="FollowButton"
              onClick={this.handleClick("unfollow")}>Following</button>;
    } else {
      // follow button
      followButton = <button className="FollowButton"
              onClick={this.handleClick("follow")}>Follow</button>;
    }

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
            <p>{this.state.user.posts}</p>
            <p>{this.state.user.followers}</p>
            <p>{this.state.user.followees}</p>
          </div>
          {followButton}
        </div>
        <div className="SearchAndFeed">
          <div className="Feed">
            <PostFeedDashboardContainer userId={this.state.user.id}
              feedType={"profile"}/>
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

export default Profile;
