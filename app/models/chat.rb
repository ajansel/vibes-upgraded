class Chat < ApplicationRecord
  has_many :messages,
    primary_key: :id,
    foreign_key: :chat_id,
    class_name: :ChatMessage

  has_many :memberships,
    primary_key: :id,
    foreign_key: :chat_id,
    class_name: :ChatMembership

  has_many :members,
    through: :memberships,
    source: :member
end
