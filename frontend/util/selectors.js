const profileSelector = (state, ownProps) => {
  let posts = Object.values(state.entities.posts)

  if (location === 'profile') {
    posts = posts.filter(
      (post) => post.author_id === ownProps.match.params.userId
    );
  } else if (location === 'dashboard') {
    posts = posts.filter(
      (post) => post.author.
    );
  }
  return posts;
}
