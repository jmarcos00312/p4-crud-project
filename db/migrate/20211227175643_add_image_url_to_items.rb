class AddImageUrlToItems < ActiveRecord::Migration[6.1]
  def change
    add_column :items, :img_url, :string
  end
end
