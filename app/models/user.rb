# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  name            :string           not null
#  username        :string           not null
#  email           :string           not null
#  img_url         :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :name, :username, :email, :img_url, :password_digest, presence: true
  validates :username, :email, uniqueness: { case_sensative: false }
  validates :password, length: { minimum: 6 }, allow_nil: true
  after_initialize :ensure_session_token, :ensure_img_url

  attr_reader :password

  has_many :posts,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Post

  has_many :likes,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Like

  has_many :followers,
    primary_key: :id,
    foreign_key: :followee_id,
    class_name: :Follower

  has_many :followees,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :Follower

  has_many :followee_users,
    through: :followees,
    source: :followee

  has_many :followee_posts,
    through: :followee_users,
    source: :posts

  has_many :chat_messages,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Chat

  has_many :chat_memberships,
    primary_key: :id,
    foreign_key: :member_id,
    class_name: :ChatMembership

  has_many :chats,
    through: :chat_memberships,
    source: :chat

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)

    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  def self.top_ten_results(query_param, curr_user)
    curr_user_id = curr_user.id if curr_user
    param = '%' + query_param.downcase + '%'
    User.where.not(id: curr_user_id).
        where('lower(name) LIKE ? or lower(username) LIKE ?', param, param).limit(10)
  end

  def ensure_img_url
    rand_color = [3,4].sample
    rand_theme = ['bythepool', 'frogideas', 'sugarsweets', 'heatwave',
                  'daisygarden', 'seascape', 'summerwarmth', 'duskfalling',
                  'berrypie'].sample
    self.img_url ||= "http://www.tinygraphs.com/labs/isogrids/hexa/#{self.username}?theme=#{rand_theme}&numcolors=#{rand_color}&size=220&fmt=svg"
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  def generate_session_token
    SecureRandom.urlsafe_base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
end
