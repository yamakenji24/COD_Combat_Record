import React, {Component} from "react"
import ShowmaxEkia from "./ShowmaxEkia"

class MaximumEkia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weaponStatus: this.props.weaponStatus,
      maxEkia: 0
    }
  }

  render() {
    const weapon = [0]
    var tmpmax = this.state.maxEkia
    return (
      <div>
        <h1>OVERALL USAGE</h1>
        {
          this.state.weaponStatus.forEach(
            eachweapon =>
              {
                if(eachweapon.ekia >= tmpmax) {
                  tmpmax = eachweapon.ekia
                  weapon.pop()
                  weapon.push(eachweapon)
                }
              }
          )
        }
        {<ShowmaxEkia key={weapon.id} showmaxekia={weapon} />}
      </div>
    )
  }
}

export default MaximumEkia
