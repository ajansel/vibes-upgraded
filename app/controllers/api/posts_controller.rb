class Api::PostsController < ApplicationController
  def index
    # Returns all of the posts from users you are following
    @posts = []
    follows = current_user.followees
    follows.each do |follow|
      more_posts = Post.find_by(author_id: follow.followee_id)
      if more_posts
        if more_posts.is_a?(Array)
          @posts += more_posts
        else
          @posts << more_posts
        end
      end
    end
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
