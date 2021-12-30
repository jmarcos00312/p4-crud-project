class BrandsController < ApplicationController
    def index
        render json: Brand.all, include: 'items'
    end
end
