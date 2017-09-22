class Api::SongsController < ApplicationController
  def index
    @songs = Song.all.limit(10)
    render :index
  end

  def show
    @songs = Song.find(params[:id])
    render :show
  end
end
