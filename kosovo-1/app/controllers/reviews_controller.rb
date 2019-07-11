class ReviewsController < ApplicationController
  before_action :authenticate_user!, except: [:index]
  before_action :set_review, except: [:index, :create]
    
  def index 
    @post = Post.find params[:post_id]
    @reviews = @post.reviews

    render json: @reviews    
  end

  def create
    @user = current_user
    @post = Post.find params[:post_id]
    @review = @post.reviews.merge(current_user.reviews).new review_params
    if @review.save
      render json: @review, status: :created
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  def show
    render json: @review
  end

  def update
    @user = current_user
      @review.update review_params
      render json: {
        message: "same user-it worked!"
      }
  end
    
  def destroy
    @user = current_user

    @review.delete
    
    render json: {
      message: "Review deleted"
    }
  end

 private

  def set_review
    @post = Post.find params[:post_id]
      @reviews = @post.reviews
      @review = @reviews.find params[:id]
  end

  def review_params
    params.permit(:title, :review_text, :first_name, :last_name, :post_id, :user_id)
  end
end