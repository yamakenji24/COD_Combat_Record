class AchievementController < ApplicationController
  def index
    @weaponstatus = WeaponStatus.joins(:weapon).select(
      :id,
      :groupid,
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
