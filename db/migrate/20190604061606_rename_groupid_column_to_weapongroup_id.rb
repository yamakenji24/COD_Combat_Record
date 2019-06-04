class RenameGroupidColumnToWeapongroupId < ActiveRecord::Migration[5.2]
  def change
    rename_column :weapons, :groupid, :weapon_group_id
  end
end
