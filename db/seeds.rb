# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

User.destroy_all

User.create!(
  name: 'Jon Snow',
  username: 'jonsnow',
  email: 'jonsnow@gmail.com',
  img_url: 'https://t3.ftcdn.net/jpg/00/64/67/80/240_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg',
  password: 'password'
)

9.times do
  name = Faker::Name.unique.name
  name_arr = name.remove('.').split(' ')
  username = name_arr[0]
  username += '_' + name_arr[1] if name_arr[1]
  email = username + '@gmail.com'

  User.create!(
    name: name,
    username: username,
    email: email,
    img_url: 'https://t3.ftcdn.net/jpg/00/64/67/80/240_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg',
    password: 'password'
  )
end
