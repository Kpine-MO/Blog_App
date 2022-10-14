class SessionsController < ApplicationController
  def create
    bloger = Bloger.find_by(username: params[:username])
    if bloger&.authenticate(params[:password])
      session[:bloger_id] = bloger.id
      render json: bloger
    else
      # render json: {errors: user.errors}, status: :unauthorized
      render json: {errors: ["Username or Password Incorrect"]}, status: :unauthorized
    end
  end

  def destroy
    if session[:bloger_id] 
      session.destroy
      head :no_content
    else
      render json: {errors: ["No user logged in"]}, status: :unauthorized
    end
  end
end
