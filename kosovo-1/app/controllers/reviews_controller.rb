class ReviewsController < ApplicationController
    before_action :authenticate_user!, except: [:index]
    load_and_authorize_resource only: [:destroy, :update]

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
        @user = current_user
        @review = Review.find(params[:id])
    
        if @review.update(preview_params)
          render json: @review
        else
          render json: @review.errors, status: :unprocessable_entity
        end
      end
    
      def destroy
        @user = current_user
        @review = Review.find(params[:id]).delete
    
        render json: {
          message: "Review deleted"
        }
      end
    

 private

  def post_params
    params.require(:post).permit(:title, :review_text)
  end
end


