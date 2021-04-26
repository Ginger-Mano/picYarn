class StoriesController < ApplicationController
    def index
        story = Story.all
        render json: story
    end

    def show
        story = Story.find(story_params[:id])
        render json: story
    end

    def create
        story = Story.create(story_params)
        render json: story
    end

    private

    def story_params
        params.permit(:title, :likes, :wordcount, :text, :author, :user_id, :photo_id)
    end

end
