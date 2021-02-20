class StoriesController < ApplicationController
    def index
        story = Story.all
        render json: story
    end
end
