class AchievementController < ApplicationController
  def index
    @weaponStatus = WeaponStatus.joins(weapon: :weapon_group).select(
      :id,
      :groupid,
      :groupname,
      :name,
      :kill,
      :death,
      :headshot,
      :assist,
      :ekia,
      :accuracy,
      :timeused
    )
    
  end
end
