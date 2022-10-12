class BlogsController < ApplicationController
    before_action :authorize
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    def index
        render json: Blog.all, status: :created
    end

    def create
        user_id = session[:user_id]
        user = User.find(user_id)
        blog = user.blogs.create!(blog_params)
        render json: blog, status: :created
    end


    def update
        user_id = session[:user_id]
        user = User.find(user_id)
        blog = user.blogs.find_by(id: params[:id])

        if blog
            blog.update(update_params)
            render json: blog
        else
            render json: {error: "Blog not found"}, status: :not_found
        end

        
    end
    def destroy
        user_id = session[:user_id]
        user = User.find(user_id)
        blog = user.blogs.find_by(id: params[:id])
        if blog
          blog.destroy
          head :no_content
        else
          render json: { error: "Blog not found" }, status: :not_found
        end
        
    end

    private
    def blog_params
        params.permit( :title, :category, :image_url, :content, :author )
    end
    def update_params
        params.permit(:title, :category, :content)
        
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

    def record_invalid(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

    def not_found
        render json: {errors: ["User Not Found"]}, status: :unauthorized
    end
end
