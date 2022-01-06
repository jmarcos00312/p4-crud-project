class Brand < ApplicationRecord
    has_many :items, dependent: :destroy
    # has_many :items, through: :branded_items
end
