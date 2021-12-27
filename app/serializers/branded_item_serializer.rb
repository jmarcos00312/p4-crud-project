class BrandedItemSerializer < ActiveModel::Serializer
  attributes :id
  has_one :brand
  has_one :item
end
