class Story < ApplicationRecord
  has_many :comments
  belongs_to :user
  belongs_to :photo
end
