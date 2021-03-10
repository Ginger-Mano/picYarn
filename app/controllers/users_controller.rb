class UsersController < ApplicationController
    def index
        user = User.all
        render json: user
    end

    def show
        user = User.find(user_params[:id])
        render json: user
    end

    def create
        user = User.create(user_params)
        render json: user
    end

    # def edit
    #     user = User.find(params[:id])
    # end

    def update
        user = User.find(user_params[:id])
        user.update(user_params)
        render json: user
    end

    private

    def user_params
        params.permit(:username, :name, :location, :comment, :description, :image, :interest_tag, :id)
    end

end
