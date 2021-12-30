class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :rating, :buyer_id, :sold, :sale
  has_one :brand
  has_one :seller
end
