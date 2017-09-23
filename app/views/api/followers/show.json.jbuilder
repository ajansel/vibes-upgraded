if @follow
  json.set! @follow.id do
    json.extract! @follow, :id, :user_id, :post_id
  end
else
  {}
end
