if user
  json.extract! user, :id, :name, :username, :img_url, :email
  json.posts user.posts.count
  json.followers user.followers.count
  json.followees user.followees.count
  if current_user
    json.followed_by_current_user !!user.followers.find_by(follower_id: current_user.id)
  end
else
  {}
end
