export const postLike = (postId) => {
  return $.ajax({
    method: 'POST',
    url: `api/likes`,
    data: { id: postId }
  });
};

export const deleteLike = (likeId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/likes/${likeId}`
  });
};
