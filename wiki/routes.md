# API Endpoints
# Users and their features / components
## users
| **method** | **path**         | **action** | **details**                                               |
| ---------- | ----------       | ---------- | --------------------------------------------------------- |
| `GET`      | /api/users       | index      | returns the user info, can be used for searching          |
| `POST`     | /api/users       | create     | sign up                                                   |

## posts
| **method** | **path**         | **action** | **details**                                               |
| ---------- | ----------       | ---------- | --------------------------------------------------------- |
| `GET`      | /api/posts       | index      | returns relevant posts (filtered by data/params)          |
| `GET`      | /api/posts/:id   | show       | returns post                                              |
| `POST`     | /api/posts       | create     | creates a post                                            |
| `PATCH`    | /api/posts/:id   | update     | edit a post                                               |
| `DELETE`   | /api/posts/:id   | destroy    | remove a post                                             |

## likes
| **method** | **path**         | **action** | **details**                                               |
| ---------- | ----------       | ---------- | --------------------------------------------------------- |
| `POST`     | /api/likes       | create     | like a post                                               |
| `DELETE`   | /api/likes       | destroy    | unlike a post                                             |

**Note:** likes does not include a `GET` route beacuse we will have these routes render the `api/posts/show.json.jbuilder` view

# Song components (aka songs and artists)
## songs
| **method** | **path**         | **action** | **details**                                               |
| ---------- | ----------       | ---------- | --------------------------------------------------------- |
| `GET`      | /api/songs/:id   | show       | returns a song & the data needed to render/create post    |

## artists
| **method** | **path**         | **action** | **details**                                               |
| ---------- | ----------       | ---------- | --------------------------------------------------------- |
| `GET`      | /api/artists/:id | show       | returns an artist & the data needed to render/create post |

# Frontend Routes
+ /login
+ /signup
+ /feed - post feed, homepage
+ /users/:userId - user profile
+ /posts/new - create a chirp
+ /posts/:postId - post show
+ /posts/:postId/edit - update a post
