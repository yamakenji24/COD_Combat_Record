class RenameWeaponidColumnToWeaponId < ActiveRecord::Migration[5.2]
  def change
    rename_column :weapon_statuses, :weaponid, :weapon_id
  end
end
