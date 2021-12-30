class Item < ApplicationRecord
  belongs_to :seller, class_name: "User", foreign_key: "seller_id"
  belongs_to :buyer, class_name: "User", foreign_key: "buyer_id", optional: true
  belongs_to :brand
  has_many :watch_lists
  has_many :branded_items

  # validates :name, :price, :img_url, :

end
