class Api::FollowersController < ApplicationController
  def create
    @follow = Follower.new
    @follow.followee_id = params[:id]
    @follow.follower_id = current_user.id

    if @follow.save
      @user = @follow.followee
      render 'api/users/show'
    else
      render json: @follow.errors.full_messages, status: 401
    end
  end

  def destroy
    @follow = Follower.find_by(follower_id: current_user.id, followee_id: params[:id])

    if @follow
      @follow.destroy
      @user = @follow.followee
      render 'api/users/show'
    else
      # This status is followly not correct
      render json: ["You can only destroy your follows"], status: 404
    end
  end
end
