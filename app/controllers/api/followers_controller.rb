class Api::FollowersController < ApplicationController
  def create
    @follow = Follower.new(follow_params)

    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follower.find(params[:id])

    if @follow && @follow.follower_id == current_user.id
      @follow.destroy!
      render :show
    else
      render json: ["You can only destroy your follows"], status: 404
    end
  end

  private

  def follow_params
    params.require(:follow).permit(:follow_id, :followee_id)
  end
end
