class BrandsController < ApplicationController
    def index
        render json: Brand.all, include: 'items'
    end

    def create
        render json: Brand.create!(brands_params), status: :created
    end

    def destroy
        brand = Brand.find(params[:id])
        brand.destroy
        head :no_content
    end

    def show
        render json: Brand.find(params[:id]), include: 'items'
    end


    private

    def brands_params
        params.permit(:name)
    end
end
