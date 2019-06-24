class ChangeImageBinaryToString < ActiveRecord::Migration[5.2]
  def change
    change_column :weapons, :image, :string
  end
end
