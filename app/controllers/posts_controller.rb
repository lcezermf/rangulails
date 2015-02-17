class PostsController < ApplicationController

  def index
    @posts = Post.all
    respond_with @posts
  end

  def show
    @post = Post.find params[:id]
    respond_with @post
  end

  # private

  # def post_params
  #   params.require(:post).permit(:title, :content)
  # end
end
