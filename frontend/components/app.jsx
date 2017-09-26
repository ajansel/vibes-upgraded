import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SessionButtonsContainer from './session/session_buttons_container';
import SessionFormContainer from './session/session_form_container';
import HomepageContainer from './homepage/homepage_container';
import DashboardContainer from './dashboard/dashboard_container';
import ProfileContainer from './profile/profile_container';
import UserSearchContainer from './user_search/user_search_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Link } from 'react-router-dom';

const App = (props) => {
  return (
    <div className="EntirePageBody">
      <header className="NavBar">
        <div className="NavBarContent">
          <Link className="HeaderLogo" to="/">Vibes</Link>
          <UserSearchContainer />
          <SessionButtonsContainer />
        </div>
      </header>
      <main className="PageContainer">
        <Switch>
          <AuthRoute path="/login" component={SessionFormContainer} />
          <AuthRoute path="/signup" component={SessionFormContainer} />
          <ProtectedRoute path="/dashboard" component={DashboardContainer} />
          <Route path="/profile/:userId" component={ProfileContainer} />
          <AuthRoute path="/" component={HomepageContainer} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
