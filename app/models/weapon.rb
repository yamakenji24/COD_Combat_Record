class Weapon < ApplicationRecord
  has_many :weapon_statuses
  belongs_to :weapon_group
end
