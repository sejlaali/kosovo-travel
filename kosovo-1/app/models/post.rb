class Post < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews
    
    # def avg_rating
    #     review.average(:rating)
    #   end 
end
