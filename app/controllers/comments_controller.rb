class CommentsController < ApplicationController

    def index
        comments = Comment.all
        render json: comments
    end

    def create
        user_id = session[:user_id]
        user = User.find(user_id)
        comment = user.comments.create(comment_params)
        render json: comment, status: :created
    end
    

    def destroy
        find_comment.destroy
        head :no_content
    end

    def update
        render json: find_comment.update(comment_params)
    end

    private

    def comment_params
        params.permit(:description )
    end

    def find_comment
        comment = Comment.find(params[:id])
    end
end
