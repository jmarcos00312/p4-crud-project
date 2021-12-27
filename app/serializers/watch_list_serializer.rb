class WatchListSerializer < ActiveModel::Serializer
  attributes :id
  has_one :item
  has_one :user
end
