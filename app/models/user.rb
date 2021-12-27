class User < ApplicationRecord
    has_secure_password
    has_many :purchased_items, class_name: 'Item', foreign_key: 'buyer_id', dependent: :nullify
    has_many :sold_items, class_name: 'Item', foreign_key: 'seller_id', dependent: :nullify

    has_many :sold_brands, through: :sold_items, source: :brands
    has_many :purchased_brands, through: :purchased_items, source: :brands
end
