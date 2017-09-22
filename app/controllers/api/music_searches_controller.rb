class Api::MusicSearchesController < ApplicationController
  def index # Aka search
    @artists = Artist.top_five_results(search_params[:query])
    @albums = Album.top_five_results(search_params[:query])
    @songs = Song.top_five_results(search_params[:query])
    render :search
  end

  private

  def search_params
    params.require(:search).permit(:query)
  end
end
