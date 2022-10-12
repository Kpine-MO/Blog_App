class CommentsController < ApplicationController

    def index
        comments = Comment.all
        render json: comments
    end

    def create
        comment = Comment.create(comment_params)
        render json: comment
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
        params.permit(:description, :blog_id, :user_id)
    end

    def find_comment
        comment = Comment.find(params[:id])
    end
end
