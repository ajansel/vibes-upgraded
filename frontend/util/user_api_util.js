export const getUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  });
};

export const patchUser = (user) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: { user }
  });
};

export const searchUserDatabase = (query) => {
  return $.ajax({
    method: 'GET',
    url: 'api/users',
    data: {search: { query } }
  });
};

export const getFollowedUsers = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/users/followed_users',
  });
};
