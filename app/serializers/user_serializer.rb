class UserSerializer < ActiveModel::Serializer
  # attributes :id, :first_name, :last_name, :username, :img_url, :admin, :Email
  attributes :id, :first_name, :last_name, :username, :img_url, :admin, :email
  has_many :sold_items
  has_many :purchased_items
end
