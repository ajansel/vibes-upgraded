if user
  json.extract! user, :id, :name, :username, :img_url
else
  {}
end
