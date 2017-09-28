json.set! :type, 'album'
json.set! :artist, album.artist
json.extract! album, :id, :title, :img_url
