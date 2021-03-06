# == Schema Information
#
# Table name: albums
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  img_url    :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord
  validates :title, :img_url, presence: true

  belongs_to :artist,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: :Artist

  has_many :songs,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: :Song

  def self.top_five_results(query_param)
    param = '%' + query_param.downcase + '%'
    Album.where('lower(title) LIKE ?', param).limit(5)
  end
end
