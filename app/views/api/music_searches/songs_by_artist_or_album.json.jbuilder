@songs.each do |song|
  json.set! song.id do
    json.set! :type, 'song'
    json.partial! 'api/songs/song', song: song
  end
end
