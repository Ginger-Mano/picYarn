class Photo < ApplicationRecord
    has_many :stories
    has_many :users, through: :stories
    has_many :comments, through: :stories
end
