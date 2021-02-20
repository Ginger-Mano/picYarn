class PhotosController < ApplicationController
    def index
        photo = Photo.all
        render json: photo
    end
end
