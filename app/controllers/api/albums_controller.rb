class Api::AlbumsController < ApplicationController
  def index
    @albums = Album.all
    render :index
  end

  def show
    @albums = Album.find(params[:id])
    render :show
  end
end
