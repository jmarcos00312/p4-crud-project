class ItemsController < ApplicationController
    skip_before_action :authenticate_user, only: [:index, :show ]
    def index
        render json: Item.all
    end

    def show
        item = find_item
        render json: item
    end

    def create
        newItem = Item.create!(item_params)
        render json: newItem, status: :created
    end

    def update
        item = find_item
        item.update!(item_params)
        render json: item
    end

    def destroy
        item = find_item
        item.destroy
        head :no_content
    end
    



    private

    def item_params
        params.permit(:name, :price, :rating, :seller_id, :sold, :sale, :brand_id)
    end

    def find_item
        Item.find(params[:id])
    end
end
