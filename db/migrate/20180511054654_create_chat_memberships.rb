class CreateChatMemberships < ActiveRecord::Migration[5.1]
  def change
    create_table :chat_memberships do |t|
      t.integer :member_id, null: false
      t.integer :chat_id, null: false
    end

    add_index :chat_memberships, :member_id
    add_index :chat_memberships, [:chat_id, :member_id], unique: true
  end
end
