class Api::PostsController < ApplicationController
  def index
    @posts = current_user.posts + current_user.followee_posts
    render :index
  end

  def profile_index
    @posts = User.find(params[:id]).posts
    render :index
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id

    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  private

  def post_params
    params.require(:post).permit(:body, :song_id)
  end
end
