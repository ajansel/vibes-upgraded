if post
  json.extract! post, :id, :body, :author_id, :song_id, :created_at
  json.likes post.likes.count
  json.liked_by_current_user !!post.likes.find_by(user_id: current_user.id)
  json.set! :author, User.find(post.author_id)
  json.set! :song, Song.find(post.song_id)
else
  {}
end
