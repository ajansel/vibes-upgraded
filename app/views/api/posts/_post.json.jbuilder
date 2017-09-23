if user
  json.extract! user, :id, :body, :author_id, :song_id
else
  {}
end
