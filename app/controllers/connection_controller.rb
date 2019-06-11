class ConnectionController < ApplicationController
  def index
    
    @data = JSON.parse(get_record)
    @check_success = @data["status"]
    @mystatus = @data["data"]
    
     if @check_success == "success"                
      @wpstatus = @data["data"]["mp"]["lifetime"]["itemData"]
      weapons = Weapon.all   
      
      
      @wpstatus.each_key do |weapontype|
        wp = @wpstatus[weapontype]
        wp.each_key do |tmp|
          each_wp = @wpstatus[weapontype][tmp]
          
          status = Weapon.find_by(name: each_wp["label"])          
          WeaponStatus.create(
            weapon_id: status.id,
            kill: each_wp["kills"],
            death: each_wp["deathsDuringUse"],
            headshot: each_wp["headshots"],
            assist: each_wp["assists"],
            ekia: each_wp["ekia"],
            accuracy: each_wp["accuracy"],
            timeused: each_wp["timeUsed"]
          )
        end
      end
        
     else
       
     end  
  end

  private

  def get_record
    agent = Mechanize.new
    agent.user_agent_alias = "Windows Mozilla"

    myrecord = File.read(Rails.root.join('tmp', 'data.json'))
    
    myrecord
  end
end
