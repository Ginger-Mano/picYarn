class UsersController < ApplicationController
    def index
        user = User.all
        render json: user
    end

    def create
        user = User.create(user_params)
        render json: user
    end

    private

    def user_params
        params.permit(:username, :name, :location, :comment, :description, :image, :interest_tag)
    end

end
