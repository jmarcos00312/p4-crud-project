class CreateBrandedItems < ActiveRecord::Migration[6.1]
  def change
    create_table :branded_items do |t|
      t.references :brand, null: false, foreign_key: true
      t.references :item, null: false, foreign_key: true

      t.timestamps
    end
  end
end
