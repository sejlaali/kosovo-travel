class ReviewsController < ApplicationController
    before_action :authenticate_user!, except: [:index]

    def create
        @user = current_user
        @review = @user.reviews.build(review_params)
    
        if @user.save
          render json: @review, status: :created, location: @review
        else
          render json: @review.errors, status: :unprocessable_entity
        end
      end

      def update
        @review = Review.find(params[:id])
    
    
        if @review.update(preview_params)
          render json: @review
        else
          render json: @review.errors, status: :unprocessable_entity
        end
      end
    
      def destroy
        @user = current_user

        # @reviews = @user.reviews
        # @review = @reviews.find(params[:])
    
        render json: @user
      end
    

 private

  def post_params
    params.require(:post).permit(:title, :review_text)
  end
end


