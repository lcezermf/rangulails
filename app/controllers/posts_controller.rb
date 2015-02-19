class PostsController < ApplicationController

  def index
    @posts = Post.order(id: :desc)
    respond_with @posts
  end

  def show
    @post = Post.find params[:id]
    respond_with @post
  end

  def create
    @post = Post.new post_params

    if @post.save
      render json: @post, status: 200
    else
      render json: { errors: @post.errors }, status: 422
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :content)
  end
end
