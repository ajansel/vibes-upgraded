if post
  json.extract! post, :id, :body, :author_id, :song_id
  json.created_at post.created_at.to_i
  json.likes post.likes.count
  if current_user
    json.liked_by_current_user !!post.likes.find_by(user_id: current_user.id)
  end
  json.set! :author, User.find(post.author_id)
  json.set! :song, Song.find(post.song_id)
else
  {}
end
