class Api::MusicSearchesController < ApplicationController
  def index # Aka search
    @artists = Artist.top_five_results(search_params[:query])
    @albums = Album.top_five_results(search_params[:query])
    @songs = Song.top_five_results(search_params[:query])
    render :index
  end

  def songs_by_artist
    @songs = Song.where(artist_id: search_params[:artist_id])
    render :songs_by_artist
  end

  private

  def search_params
    params.require(:search).permit(:query, :artist_id)
  end
end
