class ChatMessage < ApplicationRecord
  validates :content, presence: true
  
  after_create_commit do 
    ChatMessageCreationEventBroadcastJob.perform_later(self)
    chat.touch
  end

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :chat,    
    primary_key: :id,
    foreign_key: :chat_id,
    class_name: :Chat
end
