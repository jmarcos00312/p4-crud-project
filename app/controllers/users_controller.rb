class UsersController < ApplicationController
    def index
        render json: User.all
    end

    def show
        user = find_user
        render json: user
    end

    def update
        user = find_user
        user.update!(user_params)
        render json: user
    end
    def create
        render json: User.create!(user_params), status: :created
    end

    def destroy
        user = find_user
        user.destroy
        head :no_content
    end




    private

    def user_params
        params.permit(:username, :first_name, :last_name, :password, :img_url)
    end

    def find_user
        User.find(params[:id])
    end
end
