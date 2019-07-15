class Post < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews
    
    def self.average_rating
        if @post.reviews.size > 0
            @post.reviews.average(:rating).to_i
        else
            'undefined'
        end
    end

    
end
