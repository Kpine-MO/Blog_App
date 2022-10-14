class BlogsController < ApplicationController
    before_action :authorize
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    def index
        render json: Blog.all, status: :created
    end

    def create
        user_id = session[:user_id]
        user = User.find(user_id)
        blog = user.blogs.create!(blogs_params)
        render json: recipe, status: :created
    end


    private

    def blogs_params
        params.permit(:title, :content, :author, :category)
    end

    def authorize
        return render json: {errors: ["Unauthorized"]}, status: :unauthorized unless session[:user_id]
    end

    def record_invalid(invalid)
        render json: {errors: [invalid.record.errors]}, status: :unprocessable_entity
    end

end

