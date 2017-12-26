class UsersController < ApplicationController

    def index 
        @users = User.all
        render json: @users
    end

    def show
        user_id = params[:id]
        @user = User.find_by_id(user_id)
        render json: @user
    end

    def create
        @user = User.create!(user_params)
        render json: @user
    end

    def update
        user_id = params[:id]
        @user = User.find_by_id(user_id)
        @user.update_attributes(user_params)
        render json: @user
    end

    def destroy
        user_id = params[:id]
        @user = User.find_by_id(user_id)
        @user.destroy
        render json: {
            msg: 'Deleted the User Successfully'
        }

    end

    private 

    def user_params
        params.require(:user).permit(:name, :password) 
    end
end
