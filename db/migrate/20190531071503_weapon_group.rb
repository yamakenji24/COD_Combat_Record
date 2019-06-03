class WeaponGroup < ActiveRecord::Migration[5.2]
  def change
     drop_table :weapon_groups
  end
end
