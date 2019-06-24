class ChangeDataImagestringToBinary < ActiveRecord::Migration[5.2]
  def change
    change_column :weapons, :image, :binary
  end
end
