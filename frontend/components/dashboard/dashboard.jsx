import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="Dashboard">
        <div className="UserWidget">
          <h3>Test User widget</h3>
        </div>
        <div className="SearchAndFeed">
          <div className="MusicSearch">
            <h3>Test Music Search</h3>
          </div>
          <div className="Feed">
            <h3>Test Feed</h3>
          </div>
        </div>
        <div className="BonusWidget">
          <h3>Test Bonus widget</h3>
        </div>
      </div>
    );
  }
}

export default Dashboard;
