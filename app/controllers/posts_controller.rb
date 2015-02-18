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

    unless @post.save
      return render text: @post.errors
    end

    respond_with @post
  end

  private

  def post_params
    params.require(:post).permit(:title, :content)
  end
end
