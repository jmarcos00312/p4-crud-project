class AddDefaultValueToSaleItem < ActiveRecord::Migration[6.1]
  def change
    # change_column :items, :sale, :boolean, default: false
    change_column_default :items, :sale, false
    #Ex:- change_column("admin_users", "email", :string, :limit =>25)
  end
end
