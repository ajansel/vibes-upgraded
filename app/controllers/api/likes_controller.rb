class Api::LikesController < ApplicationController
  def create
    @like = Like.new
    @like.user_id = current_user.id
    @like.post_id = params[:id]

    if @like.save
      @post = @like.post
      render 'api/posts/show'
    else
      render json: @like.errors.full_messages, status: 401
    end
  end

  def destroy
    @like = Like.find_by(user_id: current_user.id, post_id: params[:id])

    if @like
      @like.destroy
      @post = @like.post
      render 'api/posts/show'
    else
      # This status is likely not correct
      render json: ["You can only destroy your likes"], status: 404
    end
  end
end
