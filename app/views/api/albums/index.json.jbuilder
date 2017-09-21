json.array! @album do |album|
  json.partial! 'api/album/album', album: album
end
