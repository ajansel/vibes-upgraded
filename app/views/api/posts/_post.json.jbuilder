if post
  json.extract! post, :id, :body, :author_id, :song_id
else
  {}
end
