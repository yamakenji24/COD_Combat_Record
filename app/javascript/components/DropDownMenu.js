import React, {Component} from "react"

import StatusList from "./StatusList"
import ShowWeapon from "./ShowWeapon"

class DropDownMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listOpen: false,
      eachlistOpen: false,
      weaponStatus: this.props.weaponStatus,
      weaponName:[
        {name:"bare_hands"},{ name: "tactical_rifle"},{ name: "equipment"},{ name: "assault_rifle"},
        { name: "shotgun"},{ name: "scorestreak"},{ name: "sniper"},{ name: "specialist"},
        { name: "LMG"},{ name: "launcher"},{ name: "pistol"},{ name: "SMG"},{ name: "gear"},{ name: "weapon_melee"} 
      ],
      weaponlistOpen: "null"
    }
  }
  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen,
    }))
  }
  
  eachList(val) {
    this.setState(prevState => ({
      eachlistOpen: true,
      weaponlistOpen: val
    }))
  }

  handleClickMenu(val) {
    this.setState({
      listOpen: false,
      eachlistOpen: false,
    })
    alert(val)
  }

  handleClickOutside() {
    this.setState({
      listOpen: false,
    })
  }

  render() {
    const {listOpen, eachlistOpen} = this.state
    const weapons = []

    function PushWeapon(val) {
      return val
    }
   
    return (
      <div>
        <div onClick={this.toggleList.bind(this)} style={styles.menuButton}>各武器</div>
        {listOpen &&
         (
         <div>
           {
             this.state.weaponName.map(
               wname =>
                 <div onClick={this.eachList.bind(this,wname.name)} style={styles.menuButton} key={wname.name}>{wname.name}</div>
             )
           }
           
           {
             eachlistOpen && (
               <div>
                 {
                   this.state.weaponStatus.forEach(
                     getweapon =>
                       {   
                         if(getweapon.groupname == this.state.weaponlistOpen) {
                           weapons.push(
                             <ShowWeapon key={getweapon.id} showweapon={getweapon} />
                           )
                         }
                       }
                   )
                 }
                 <StatusList weaponstatus={weapons} />
               </div>
             )
           }
         </div>
         )
        }
      </div>
    )
  }
}
export default DropDownMenu
