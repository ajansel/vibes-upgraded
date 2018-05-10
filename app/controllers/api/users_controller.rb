class Api::UsersController < ApplicationController
  def index
    @users = User.top_ten_results(search_params[:query], current_user)
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

  def update
    @user = User.find(params[:id])

    if @user && @user.update_attributes(user_params)
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
