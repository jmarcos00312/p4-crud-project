class BrandedItem < ApplicationRecord
  belongs_to :brand
  belongs_to :item
end
