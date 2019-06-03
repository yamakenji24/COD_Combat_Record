class CreateWeaponStatuses < ActiveRecord::Migration[5.2]
  def change
    create_table :weapon_statuses do |t|
      t.integer :weaponid
      t.integer :kill
      t.integer :death
      t.integer :headshot
      t.integer :assist
      t.integer :ekia
      t.float :accuracy
      t.integer :timeused

      t.timestamps
    end
  end
end
