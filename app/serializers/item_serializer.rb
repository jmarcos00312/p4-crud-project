class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :rating, :buyer_id, :sold, :sale, :img_url
  has_one :brand
  has_one :seller
end
