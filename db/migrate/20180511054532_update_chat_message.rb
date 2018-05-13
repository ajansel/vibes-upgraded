class UpdateChatMessage < ActiveRecord::Migration[5.1]
  def change
    add_column :chat_messages, :author_id, :integer, null: false
    add_index :chat_messages, :author_id
    add_column :chat_messages, :chat_id, :integer, null: false
    add_index :chat_messages, :chat_id
  end
end
