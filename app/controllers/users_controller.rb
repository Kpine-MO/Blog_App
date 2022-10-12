class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def index
        user = User.all
        render json: user
    end

    def show
        user = User.find(session[:user_id])
        render json: user, status: :created
    end


    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :bio)
    end
    
    # def record_invalid(invalid)
    #     render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    # end

    def not_found
        render json: {errors: ["User Not Found"]}, status: :unauthorized
    end
    
end
