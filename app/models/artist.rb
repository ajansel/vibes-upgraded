# == Schema Information
#
# Table name: artists
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  img_url    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artist < ApplicationRecord
  validates :name, :img_url, presence: true

  has_many :songs,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: :Song

  has_many :albums,
    primary_key: :id,
    foreign_key: :artist_id,
      class_name: :Album

  def self.top_five_results(query_param)
    param = '%' + query_param.downcase + '%'
    Artist.where('lower(title) LIKE ?', param).limit(5)
  end
end
