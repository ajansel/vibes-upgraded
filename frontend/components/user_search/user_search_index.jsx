import React from 'react';
import UserSearchIndexItem from './user_search_index_item';

export default ({searchItems, firstTime, searchVal, currentUser,
                 followUser, unfollowUser, clearState, feedType, profileUser}) => {
  if (searchVal === "") return (<ul className="UserSearchIndex"></ul>);

  let listItems;
  // let usersHeader;

  // if (firstTime === false) usersHeader = <h3>Users</h3>;
  if (searchItems.length !== 0) {
    listItems =
      searchItems.map(
        (user) => (<UserSearchIndexItem currentUser={currentUser}
          user={user} key={user.id}
          followUser={followUser}
          unfollowUser={unfollowUser}
          clearState={clearState}
          feedType={feedType}
          profileUser={profileUser}/>)
      );
  } else if (firstTime === false){
    listItems =
      <li>No matchings users</li>;
  }


  return(
    <ul className="UserSearchIndex">
      {listItems}
    </ul>
  );
};
