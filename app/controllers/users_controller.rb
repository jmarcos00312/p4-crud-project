class UsersController < ApplicationController
    def index
        render json: User.all
    end




    private

    def user_params
        params.permit(:username, :first_name, :last_name, :password, :img_url)
    end
end
