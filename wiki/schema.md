# Users and their features / components

## users
| **column name**   | **data type** | **details**                    |
| ---------------   |:-------------:| :-------                       |
| `id`              | integer       | not null, primary key          |
| `username`        | string        | not null, indexed              |
| `email`           | string        | not null, indexed, unique      |
| `img_url`         | string        | not null                       |
| `password_digest` | string        | not null                       |
| `session_token`   | string        | not null, indexed, unique      |
| `created_at`      | datetime      | not null                       |
| `updated_at`      | datetime      | not null                       |

## posts
| **column name**   | **data type** | **details**                    |
| ---------------   |:-------------:| :-------                       |
| `id`              | integer       | not null, primary key          |
| `body`            | string        | not null                       |
| `author_id`       | integer       | not null, indexed, foreign key |
| `created_at`      | datetime      | not null                       |
| `updated_at`      | datetime      | not null                       |

* `author_id` references `users`

## likes
| **column name**   | **data type** | **details**                    |
| ---------------   |:-------------:| :-------                       |
| `id`              | integer       | not null, primary key          |
| `user_id`         | integer       | not null, indexed, foreign key |
| `post_id`         | integer       | not null, indexed, foreign key |
| `created_at`      | datetime      | not null                       |
| `updated_at`      | datetime      | not null                       |

* `user_id` references `users`
* `post_id` references `posts`
* index on `[:post_id, :user_id], unique: true`



# Song components (aka songs and artists)
## songs
| **column name**   | **data type** | **details**                    |
| ---------------   |:-------------:| :-------                       |
| `id`              | integer       | not null, primary key          |
| `title`           | string        | not null                       |
| `lyrics(aka body)`| text          | not null                       |
| `img_url`         | string        | not null                       |
| `artist_id`       | integer       | not null, indexed, foreign key |
| `created_at`      | datetime      | not null                       |
| `updated_at`      | datetime      | not null                       |

* `artist_id` references `artists`

## artists
| **column name**   | **data type** | **details**                    |
| ---------------   |:-------------:| :-------                       |
| `id`              | integer       | not null, primary key          |
| `name `           | string        | not null                       |
| `img_url`         | string        | not null                       |
| `created_at`      | datetime      | not null                       |
| `updated_at`      | datetime      | not null                       |
