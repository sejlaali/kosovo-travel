class ReviewsController < ApplicationController
    before_action :authenticate_user!, except: [:index, :create]
    load_and_authorize_resource only: [:destroy, :update]

    def index 
      @post = Post.find params[:post_id]
      @reviews = @post.reviews

      render json: @reviews    
    end

    def create
        @post = Post.find params[:post_id]
        puts review_params
        # @reviews = @post.reviews
        # @review = @post.reviews.new review_params
        # puts 'post', @post.city
        # puts 'params', review_params[:title]
        @review = Review.new review_params
      if @post.reviews << @review
        render json: @review, status: :created
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

  def review_params
    params.permit(:title, :review_text, :first_name, :last_name, :post_id)
end
end