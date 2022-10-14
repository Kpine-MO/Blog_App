class PostsController < ApplicationController

    # before_action :authorize
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
    rescue_from ActiveRecord::RecordNotFound,with: :record_not_found

    def index
        render json: Post.all
    end

    def new
        render json: Post.last(3)
    end

    def create
        bloger_id = session[:bloger_id]
        bloger = Bloger.find(bloger_id)
        post = bloger.posts.create!(posts_params)
        render json: post, status: :created
    end

    def update
        post = Post.find(params[:id])
        updated = post.update!(update_params)
        render json: updated, status: :accepted
    end

    def destroy
        post = Post.find(params[:id])
        post.destroy
        head :no_content
    end


    private

    def posts_params
        params.permit(:title, :content, :author, :category, :image_url)
    end

    def update_params
        params.permit(:title, :content, :author, :category, :image_url)
    end

    def authorize
        return render json: {errors: ["Unauthorized"]}, status: :unauthorized unless session[:bloger_id]
    end

    def record_invalid(invalid)
        render json: {errors: [invalid.record.errors]}, status: :unprocessable_entity
    end

    def record_not_found
        render json: { errors: ["Post Not Found"]}, status: :unauthorized
    end

end
