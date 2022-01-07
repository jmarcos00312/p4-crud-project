class Api::BrandsController < ApplicationController
    def index
        render json: Brand.all, include: 'items'
    end

    def show
        render json: Brand.find(params[:id]), include: 'items'
    end


    private

    def brands_params
        params.permit(:name)
    end
end
