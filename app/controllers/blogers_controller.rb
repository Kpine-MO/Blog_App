class BlogersController < ApplicationController

    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def create
        bloger = Bloger.create!(bloger_params)
        session[:bloger_id] = bloger.id
        render json: bloger, status: :created
    end

    def show
        bloger = Bloger.find(session[:bloger_id])
        render json: bloger, status: :created
    end

    private

    def bloger_params
        params.permit(:username, :password, :password_confirmation, :about)
    end
    
    def record_invalid(invalid)
        render json: {errors: [invalid.record.errors.full_messages]}, status: :unprocessable_entity
    end

    def not_found
        render json: {error: ["User Not Found"]}, status: :unauthorized
    end
end
