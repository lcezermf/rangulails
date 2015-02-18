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
      return render json: @post, status: 200
    else
      return render json: @post.errors, status: :unprocessable_entity
    end

    respond_with @post
  end

  private

  def post_params
    params.require(:post).permit(:title, :content)
  end
end
