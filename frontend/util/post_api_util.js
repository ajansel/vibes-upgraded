export const getPost = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/posts/${id}`
  });
};

export const getPosts = () => {
  return $.ajax({
    method: 'GET',
    url: `api/posts`
  });
};

export const getProfilePosts = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/posts/profile_index`,
    data: { id }
  });
};

export const postPost = (post) => {
  return $.ajax({
    method: 'POST',
    url: `api/posts`,
    data: { post }
  });
};

export const patchPost = (post) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/posts/${post.id}`,
    data: { post }
  });
};
