class CreateWeapons < ActiveRecord::Migration[5.2]
  def change
    create_table :weapons do |t|
      t.string :groupid
      t.string :integer
      t.string :name
      t.string :string
      t.string :image
      t.string :string

      t.timestamps
    end
  end
end
