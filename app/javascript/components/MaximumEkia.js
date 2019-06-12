import React, {Component} from "react"
import ShowmaxEkia from "./ShowmaxEkia"
import ShowequipEkia from "./ShowequipEkia"

class MaximumEkia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weaponStatus: this.props.weaponStatus,
    }
  }

  
  
  render() {
    const weapon = [0], equipment = [0]
    let wpmax = 0, epmax = 0
    {
      this.state.weaponStatus.forEach(
        eachweapon => {
          if(eachweapon.groupname == "equipment") {
            if (eachweapon.ekia >= epmax) {
              epmax = eachweapon.ekia, equipment.pop(), equipment.push(eachweapon)
            }
          } else if ( eachweapon.ekia >= wpmax) {
            wpmax = eachweapon.ekia, weapon.pop(), weapon.push(eachweapon)
          }
        }
      )
    }
    return (
      <div>
        <h1>OVERALL USAGE</h1>
        
        {<ShowmaxEkia key={weapon.id} showmaxekia={weapon} />}
        {<ShowequipEkia key={equipment.id} showequipekia={equipment}/>}
      </div>
    )
  }
}

export default MaximumEkia
