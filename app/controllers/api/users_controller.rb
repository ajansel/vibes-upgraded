class Api::UsersController < ApplicationController
  def index
    @users = User.top_fifteen_results(search_params[:query])
    render :index
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def create
    @user = User.new(user_params)

    if @user.save
      log_in!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :username, :email, :password, :img_url)
  end

  def search_params
    params.require(:search).permit(:query)
  end
end
