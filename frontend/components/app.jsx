import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SessionButtonsContainer from './session/session_buttons_container';
import SessionFormContainer from './session/session_form_container';
import HomepageContainer from './homepage/homepage_container';
import DashboardContainer from './dashboard/dashboard_container';
import ProfileContainer from './profile/profile_container';
import EditAccountContainer from './account/edit_account_container';
import ChatContainer from './chat/chat_container';
import ChatFormContainer from './chat/chat_form_container';
import ChatIndexContainer from './chat/chat_index_container';
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
      <Switch>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <ProtectedRoute path="/dashboard" component={DashboardContainer} />
        <ProtectedRoute path="/edit-account" component={EditAccountContainer} />
        <Route path="/profile/:userId" component={ProfileContainer} />
        <ProtectedRoute path="/chats/new" component={ChatFormContainer} />
        <ProtectedRoute path="/chats/:chatId" component={ChatContainer} />
        <ProtectedRoute path="/chats" component={ChatIndexContainer} />
        <AuthRoute path="/" component={HomepageContainer} />
      </Switch>
    </div>
  );
};

export default App;
