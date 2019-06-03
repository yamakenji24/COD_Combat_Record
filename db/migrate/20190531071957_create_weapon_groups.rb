class CreateWeaponGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :weapon_groups do |t|
      t.string :groupname

      t.timestamps
    end
  end
end
