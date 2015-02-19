class PostsController < ApplicationController
  before_action :load_post, only: [:show, :destroy, :update]

  def index
    @posts = Post.order(id: :desc)
    respond_with @posts
  end

  def show
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

  def destroy
    @post.destroy
    head 204
  end

  def update
    if @post.update post_params
      render json: @post, status: 200
    else
      render json: { errors: @post.errors }, status: 422
    end
  end

  private

  def load_post
    @post = Post.find params[:id]
  end

  def post_params
    params.require(:post).permit(:title, :content)
  end
end
