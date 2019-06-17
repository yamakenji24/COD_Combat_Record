import React, {Component} from "react"
import {Animated} from "react-animated-css";
import {connect,} from "react-redux"
import StatusList from "./StatusList"
import ShowWeapon from "./ShowWeapon"
import mapStateToProps from './../mapProps/mapStateToProps'
import mapDispatchToProps from './../mapProps/mapDispatchToProps'

class DropDownMenu extends React.Component {

  render() {
    const weapons = []
    
    return (
      <div>
        <div onClick={this.props.handletoggleList.bind(this,this.props.listOpen)} style={styles.menuButton}>各武器</div>
        {console.log(this.props)}
        {this.props.listOpen && (
          <div>
            <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
              {this.props.weaponName.map
               ( wname =>
                 <div onClick={this.props.handleeachList.bind(this,wname.name)} style={styles.menuButton} key={wname.name}>{wname.name}</div>
               )
              }
            </Animated>           
            { this.props.eachlistOpen && (
              <div>
                {this.props.weapons.weaponStatus.forEach
                 ( getweapon =>
                   { if(getweapon.groupname == this.props.weaponlistOpen) {
                     weapons.push(
                       <ShowWeapon key={getweapon.id} showweapon={getweapon} />
                     )
                   }}
                 )
                }
                <StatusList weaponstatus={weapons} />
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropDownMenu)
