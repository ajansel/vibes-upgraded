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

require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
