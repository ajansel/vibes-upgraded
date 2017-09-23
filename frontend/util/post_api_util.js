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

export const postPost = (post) => {
  return $.ajax({
    method: 'POST',
    url: `api/posts`,
    data: { post }
  });
};
