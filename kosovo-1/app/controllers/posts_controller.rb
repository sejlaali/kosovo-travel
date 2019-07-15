class PostsController < ApplicationController
    def index
        @posts = Post.all
        render json:
        @posts
    end

    def show
        @post = Post.find params[:id]
        render json: @post
    end

    def ratings
        @post = Post.find params[:id]
       render json: @posts.average_rating
    end

end
