json.set! :chats do 
  @chats.each do |chat|
    json.set! chat.id do 
      json.extract! chat, :id, :updated_at
      json.current_user_belongs !!chat.members.find_by(id: current_user.id)
      json.member_count chat.members.count
      json.member_ids chat.members.pluck(:id)
    end 
  end 
end

json.set! :messages do
  @chats.each do |chat|
    chat.messages.each do |message|
      json.set! message.id do 
        json.extract! message, :id, :content, :updated_at, :author_id, :chat_id
        json.author_img_url User.find_by(id: message.author_id).img_url
        json.author_name User.find_by(id: message.author_id).name
        json.author_username User.find_by(id: message.author_id).username
      end 
    end
  end
end

json.set! :users do 
  @chats.each do |chat|
    chat.members.each do |member|
      json.set! member.id do 
        json.partial! 'api/users/user', user: member
      end   
    end 
  end
end 