if @like
  json.set! @like.id do
    json.extract! @like, :id, :user_id, :post_id
  end
else
  {}
end
