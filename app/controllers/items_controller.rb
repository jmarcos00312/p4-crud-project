class ItemsController < ApplicationController
    def index
        render json: Item.all
    end

    def create
        newItem = Item.create(item_params)
        render json: newItem, status: :created
    end



    private

    def item_params
        params.permit(:name, :price, :rating, :seller_id, :sold, :sale, :brand)
    end
end
