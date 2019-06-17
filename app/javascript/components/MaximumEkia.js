import React, {Component} from "react"
import {connect,} from 'react-redux'
import ShowmaxEkia from "./ShowmaxEkia"
import ShowequipEkia from "./ShowequipEkia"
import mapStateToProps from './../mapProps/mapStateToProps'
import mapDispatchToProps from './../mapProps/mapDispatchToProps'

class MaximumEkia extends React.Component {

  render() {
    const weapon = [0], equipment = [0]
    let wpmax = 0, epmax = 0
    { this.props.weapons.weaponStatus.forEach(
      eachweapon => {
        if(eachweapon.groupname == "equipment") {
          if (eachweapon.ekia >= epmax) {
            epmax = eachweapon.ekia, equipment.pop(), equipment.push(eachweapon)
          }
        } else if ( eachweapon.ekia >= wpmax) {
          wpmax = eachweapon.ekia, weapon.pop(), weapon.push(eachweapon)
        }
      }
    )}
    {console.log(weapon)
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

export default connect(mapStateToProps, mapDispatchToProps)(MaximumEkia)
