class Brand < ApplicationRecord
    has_many :branded_items
    has_many :items, through: :branded_items
end
