class Api::ItemsController < ApplicationController
  # skip_before_action :authenticate_user, only: [:index, :show, :create, :destroy]
  before_action :find_item, only: %i[show update destroy sold]
  def index
    # item = Item.where(sold: false)
    render json: Item.all, status: :ok
  end

  def show
    render json: @item, status: :ok
  end

  def create
    newItem = Item.create!(item_params)
    render json: newItem, status: :created
  end

  def update
    @item.update!(item_params)
    render json: item
  end

  def destroy
    @item.destroy
    head :no_content
  end
  def sold
    @item.update!(sold: true, buyer: current_user)
    render json: @item, status: :ok
  end

  def purchased_items
    render json: current_user.purchased_items, status: :ok
  end

  
  private
  def item_params
    params.permit(
      :name,
      :price,
      :rating,
      :seller_id,
      :sold,
      :sale,
      :brand_id,
      :img_url,
    )
  end

  def find_item
    @item = Item.find(params[:id])
  end
end
