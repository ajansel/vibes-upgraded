@posts.each do |post|
  json.set! post.id do
    json.partial! 'api/posts/post', post: post
    json.set! :author, User.find(post.author_id)
  end
end
