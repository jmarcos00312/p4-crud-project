class User < ApplicationRecord
    has_secure_password


    has_many :purchased_items, class_name: 'Item', foreign_key: 'buyer_id', dependent: :nullify
    has_many :sold_items, class_name: 'Item', foreign_key: 'seller_id', dependent: :nullify
    has_many :sold_brands, through: :sold_items, source: :brands
    has_many :purchased_brands, through: :purchased_items, source: :brands
    # has_many :watch_lists

    # validates :username, :first_name, :last_name, :password, presence: true
    validates :Email, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/, presence: true, uniqueness: true
end
