class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :img_url, :admin
  has_many :sold_items
end
