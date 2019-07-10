class ReviewsController < ApplicationController
    before_action :authenticate_user!, except: [:index]

    def index 
      @post = Post.find params[:post_id]
      @reviews = @post.reviews

      render json: @reviews    
    end

    def create
      @user = current_user
      @post = Post.find params[:post_id]
      @reviews = @post.reviews
      @review = @post.reviews.merge(current_user.reviews).new review_params
      if @review.save
        render json: @review, status: :created
      else
        render json: @review.errors, status: :unprocessable_entity
      end
    end

      def update
        @user = current_user

        @review = Review.find(params[:id])
        if @review.user_id == @user.id {
          @review.update review_params
          render json: {
            message: "same user-it worked!"
          }
        }
        end
      end
    
      def destroy
        @user = current_user
        @post = Post.find params[:post_id]
        @review = Review.find(params[:id]).delete
    
        render json: {
          message: "Review deleted"
        }
      end

 private

  def review_params
    params.permit(:title, :review_text, :first_name, :last_name, :post_id, :user_id)
end
end