{
  entities: {
    users: {
      1: {
        id: 1,
        username: "john_snow",
        img_url: "https://cdn.pixabay.com/photo/2016/10/21/14/46/norway-1758183_1280.jpg"
      }
      2: {
        id: 2,
        username: "jaime_lannister",
        img_url: "https://cdn.pixabay.com/photo/2016/03/29/21/04/peace-1289363_1280.png"
      },
      3: {
        id: 3,
        username: "daenerys_targaryen",
        img_url: "https://cdn.pixabay.com/photo/2017/01/13/07/57/dragon-1976596_1280.jpg"
      }
    }
  },
  post: {
    1: {
      id: 1,
      body: "Wasted away again in Margaritaville",
      author_id: 2, // Jimmy Buffett
      likes: 12,
      // current_user_likes allows us to know whether to post or delete a user's like!
      current_user_likes: false
    },
    2: {
      id: 2,
      body: "It's only half-past twelve but I don't care, It's five o'clock somewhere",
      author_id: 2, // Jimmy Buffett
      likes: 45,
      current_user_likes: true
    },
    3: {
      id: 3,
      body: "And I don't think your beautiful, i think your beyond it.",
      author_id: 1, // Lil Wayne
      likes: 16,
      current_user_likes: true
    }
  },
  ui: {
    loading: true/false
  },
  errors: {
    login: ["Incorrect username/password combination"],
    postCreator: ["Please highlight the snippet you'd like to post"],
  },
  session: {
    id: 57,
    username: "john_snow",
    img_url: "https://cdn.pixabay.com/photo/2016/10/21/14/46/norway-1758183_1280.jpg"
  }
}
