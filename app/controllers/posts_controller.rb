class PostsController < ApplicationController

  def index
    @posts = Post.all
    respond_with @posts
  end

end
