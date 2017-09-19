class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :body, null: false
      t.integer :author_id, null: false
      t.integer :song_id, null: false
      t.timestamps
    end
    add_index :posts, :author_id
    add_index :posts, :song_id
  end
end
