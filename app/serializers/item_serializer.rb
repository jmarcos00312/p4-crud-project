class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :rating, :seller_id, :buyer_id, :sold, :sale
  has_one :brand
end
