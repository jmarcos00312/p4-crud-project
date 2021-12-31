class UsersController < ApplicationController
    def index
        render json: User.all
    end

    def me
        user = find_user
        render json: user
    end

    def update
        user = find_user
        user.update!(user_params)
        render json: user
    end

    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
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
