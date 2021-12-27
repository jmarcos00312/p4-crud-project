class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.float :price
      t.float :rating
      t.integer :seller_id
      t.integer :buyer_id
      t.references :brand, null: false, foreign_key: true
      t.boolean :sold
      t.boolean :sale

      t.timestamps
    end
  end
end
