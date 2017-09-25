export const postFollow = (followeeId) => {
  return $.ajax({
    method: 'POST',
    url: `api/followers`,
    data: { id: followeeId }
  });
};

export const deleteFollow = (followeeId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/followers/${followeeId}`,
  });
};
