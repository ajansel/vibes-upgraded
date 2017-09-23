import React from 'react';
import UserSearchIndexItem from './user_search_index_item';

export default ({searchItems, firstTime, searchVal, currentUser, followUser, unfollowUser}) => {
  if (searchVal === "") return (<ul></ul>);

  let usersUl;
  let usersHeader;

  if (firstTime === false) usersHeader = <h3>Users</h3>;
  if (searchItems.length !== 0) {
    usersUl =
    <ul>
      {searchItems.map(
        (user) => (<UserSearchIndexItem currentUser={currentUser}
          user={user} key={user.id}
          followUser={followUser}
          unfollowUser={unfollowUser}/>)
      )}
    </ul>;
  } else if (firstTime === false){
    usersUl =
    <ul>
      <li>No matchings users</li>
    </ul>;
  }


  return(
    <div className="UserSearchIndex">
      {usersHeader}
      {usersUl}
    </div>
  );
};
