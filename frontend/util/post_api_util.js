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

export const postPosts = (post) => {
  return $.ajax({
    method: 'POST',
    url: `api/posts`,
    data: { post }
  });
};
