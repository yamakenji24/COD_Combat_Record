class ChangeDatatype < ActiveRecord::Migration[5.2]
  def change
    change_column :weapons, :groupid, :integer
    
    remove_column :weapons, :integer, :string
    remove_column :weapons, :string, :string
  end
end
