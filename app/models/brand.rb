class Brand < ApplicationRecord
    has_many :items
    # has_many :items, through: :branded_items
end
