class ChatMessageCreationEventBroadcastJob < ApplicationJob
  queue_as :default

  def perform(chat_message)
    ActionCable.server.broadcast(
      'chat_channel', 
      id: chat_message.id,
      created_at: chat_message.created_at.strftime('%H:%M'),
      content: chat_message.content,
      author_id: chat_message.author_id,
      chat_id: chat_message.chat_id,
      author_img_url: User.find_by(id: chat_message.author_id).img_url,
      author_name: User.find_by(id: chat_message.author_id).name,
      author_username: User.find_by(id: chat_message.author_id).username
    )
  end
end