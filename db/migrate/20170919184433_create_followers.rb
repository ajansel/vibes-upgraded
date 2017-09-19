class CreateFollowers < ActiveRecord::Migration[5.1]
  def change
    create_table :followers do |t|
      t.integer :followee_id, null: false
      t.integer :follower_id, null: false
      t.timestamps
    end
    add_index :followers, :follower_id
    add_index :followers, :followee_id
    add_index :followers, [:followee_id, :follower_id], unique: true
  end
end
