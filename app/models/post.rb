# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  body       :string           not null
#  author_id  :integer          not null
#  song_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
  validates :body, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :song,
    primary_key: :id,
    foreign_key: :song_id,
    class_name: :Song

  has_many :likes,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Like
end
