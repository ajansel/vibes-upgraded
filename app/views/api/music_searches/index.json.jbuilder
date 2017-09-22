@artists.each do |artist|
  json.set! artist.id do
    json.partial! 'api/artists/artist', artist: artist
  end
end

@albums.each do |album|
  json.set! album.id do
    json.partial! 'api/albums/album', album: album
  end
end

@songs.each do |song|
  json.set! song.id do
    json.partial! 'api/songs/song', song: song
  end
end
