# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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

# --The following is to scrap songs, artists, & albums from Genius Lyrics ---
Artist.destroy_all
Album.destroy_all
Song.destroy_all
require 'open-uri'

links = ["https://genius.com/artists/Xxxtentacion", "https://genius.com/artists/Logic", "https://genius.com/artists/Sam-smith", "https://genius.com/artists/Kendrick-lamar", "https://genius.com/artists/Drake", "https://genius.com/artists/Lil-uzi-vert", "https://genius.com/artists/Eminem", "https://genius.com/artists/Sza", "https://genius.com/artists/Luis-fonsi-and-daddy-yankee", "https://genius.com/artists/Ed-sheeran", "https://genius.com/artists/Uicideboy", "https://genius.com/artists/Lin-manuel-miranda", "https://genius.com/artists/Kanye-west", "https://genius.com/artists/Zayn", "https://genius.com/artists/Cardi-b", "https://genius.com/artists/The-weeknd", "https://genius.com/artists/2pac", "https://genius.com/artists/Dua-lipa", "https://genius.com/artists/Ninho", "https://genius.com/artists/Kodak-black", "https://genius.com/artists/Gucci-mane", "https://genius.com/artists/Frank-ocean", "https://genius.com/artists/Lana-del-rey", "https://genius.com/artists/Khalid", "https://genius.com/artists/Travis-scott", "https://genius.com/artists/J-cole", "https://genius.com/artists/Jay-z", "https://genius.com/artists/Russ", "https://genius.com/artists/Jake-paul", "https://genius.com/artists/Future", "https://genius.com/artists/Beyonce", "https://genius.com/artists/Ski-mask-the-slump-god", "https://genius.com/artists/Migos", "https://genius.com/artists/A-ap-mob", "https://genius.com/artists/Chris-brown", "https://genius.com/artists/Dj-khaled", "https://genius.com/artists/Taylor-swift", "https://genius.com/artists/Face", "https://genius.com/artists/Lil-pump", "https://genius.com/artists/Rich-chigga", "https://genius.com/artists/Post-malone", "https://genius.com/artists/Yo-gotti", "https://genius.com/artists/The-beatles", "https://genius.com/artists/Tyler-the-creator", "https://genius.com/artists/Daniel-caesar", "https://genius.com/artists/Brockhampton", "https://genius.com/artists/Imagine-dragons", "https://genius.com/artists/21-savage", "https://genius.com/artists/Meek-mill", "https://genius.com/artists/Tay-k", "https://genius.com/artists/Childish-gambino", "https://genius.com/artists/Calvin-harris", "https://genius.com/artists/Chance-the-rapper", "https://genius.com/artists/Lil-wayne", "https://genius.com/artists/Charlie-puth", "https://genius.com/artists/Demi-lovato", "https://genius.com/artists/Radiohead", "https://genius.com/artists/The-national", "https://genius.com/artists/Blackbear", "https://genius.com/artists/A-ap-ferg", "https://genius.com/artists/Bruno-mars", "https://genius.com/artists/G-eazy", "https://genius.com/artists/Rihanna", "https://genius.com/artists/Bryson-tiller", "https://genius.com/artists/Youngboy-never-broke-again", "https://genius.com/artists/The-notorious-big", "https://genius.com/artists/Young-thug", "https://genius.com/artists/A-boogie-wit-da-hoodie", "https://genius.com/artists/Macklemore", "https://genius.com/artists/Linkin-park", "https://genius.com/artists/Lany", "https://genius.com/artists/Camila-cabello", "https://genius.com/artists/French-montana", "https://genius.com/artists/Halsey", "https://genius.com/artists/Rkomi", "https://genius.com/artists/Brand-new", "https://genius.com/artists/Katy-perry", "https://genius.com/artists/Fifth-harmony", "https://genius.com/artists/Damso", "https://genius.com/artists/Queen", "https://genius.com/artists/Trippie-redd", "https://genius.com/artists/Kay-one", "https://genius.com/artists/Nicki-minaj", "https://genius.com/artists/Big-sean", "https://genius.com/artists/Playboi-carti", "https://genius.com/artists/Pharaoh", "https://genius.com/artists/Shawn-mendes", "https://genius.com/artists/Bad-bunny", "https://genius.com/artists/Maroon-5", "https://genius.com/artists/Twenty-one-pilots", "https://genius.com/artists/Nav-and-metro-boomin", "https://genius.com/artists/Pink-floyd", "https://genius.com/artists/Gorillaz", "https://genius.com/artists/Ksi", "https://genius.com/artists/The-chainsmokers", "https://genius.com/artists/Cro", "https://genius.com/artists/Sia", "https://genius.com/artists/6lack", "https://genius.com/artists/A-ap-rocky", "https://genius.com/artists/Adele"]

# This for sure works
# links = ["https://genius.com/artists/Xxxtentacion", "https://genius.com/artists/Logic","https://genius.com/artists/Sam-smith"]

top_ten_song_links = []
artist_db = []
album_db = []
song_db = []

counter = 1
links[0..49].each do |link|

  doc = Nokogiri::HTML(open(link))
  #store the artist's name
  artist_name = doc.css('.profile_identity-name_iq_and_role_icon').children[0].text.to_s.strip
  artist_img_url = doc.css('.profile_header-avatar')[0].attributes["style"].value.to_s[23..-4]
  artist_db << [artist_name, artist_img_url] # Need to get rid of carrige returns
  top_ten_song_links = doc.css('a.mini_card')

  top_ten_song_links.each do |song_link|
    song_lyrics = ""
    counter += 1
    href = song_link.to_s[/<a href="(.*)" /, 1]
    doc = Nokogiri::HTML(open(href))

    song_title = doc.css('.header_with_cover_art-primary_info-title').children.text
    song_img_url = doc.css('.cover_art-image')[-1].attributes["src"].value
    lyric_units = doc.css('div.lyrics p')
    lyric_units.each do |lyric_unit|
      song_lyrics += lyric_unit
    end

    album_title = doc.css('span.metadata_unit-info')
    if album_title
      album_title = album_title.find { |span| span && span.children && span.children[0] &&
        span.children[0]["href"].to_s.include?("albums") }
    end
    if album_title
      album_title = album_title.text
      album_link = doc.css('span.metadata_unit-info')
        if album_link && album_link[1] && album_link[1].children && album_link[1].children[0]
          album_link = doc.css('span.metadata_unit-info')[1].children[0].attributes["href"]
        end
      if album_link
        album_link = album_link.value
        doc = Nokogiri::HTML(open(album_link))
        album_img_url = doc.css('img.cover_art-image')[-1].attributes["src"].value
      else
        album_img_url = artist_img_url
      end
    else
      album_title = nil
    end

    album_titles = []
    album_db.each { |album| album_titles << album[0] }

    album_title = song_title + ' (Single)' unless album_title

    if album_title && album_titles.none? { |name| name == album_title }
      album_db << [album_title, album_img_url, artist_name]
    end

    song_db << [song_title, song_lyrics, song_img_url, artist_name, album_title]
  end
end

# artist_db = [name, img_url]
# album_db = [title, img_url, artist_name] -- NEED TO CONVERT NAME TO ID
# song_db = [title, lyrics, img_url, arist_name, album_name] -- NEED TO CONVERT NAME TO ID
# If album name is nil, then it needs to be converted to song_title + " (Single)"

artist_db.each do |artist|
  img_url = artist[1]
  if img_url == nil
    img_url = 'https://t3.ftcdn.net/jpg/00/64/67/80/240_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg'
  end

  Artist.create!(
    name: artist[0],
    img_url: img_url
  )
end

album_db.each do |album|
  img_url = album[1]
  if img_url == nil
    img_url = 'https://t3.ftcdn.net/jpg/00/64/67/80/240_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg'
  end

  Album.create!(
    title: album[0],
    img_url: img_url,
    artist_id: Artist.find_by_name(album[2]).id
  )
end

song_db.each do |song|
  img_url = song[2]
  if img_url == nil
    img_url = 'https://t3.ftcdn.net/jpg/00/64/67/80/240_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg'
  end

  Song.create!(
    title: song[0],
    lyrics: song[1],
    img_url: img_url,
    artist_id: Artist.find_by_name(song[3]).id,
    album_id: Album.find_by_title(song[4]).id
  )
end
