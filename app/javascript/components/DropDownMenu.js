import React, {Component} from "react"
import {Animated} from "react-animated-css";
import {connect,} from "react-redux"
import StatusList from "./StatusList"
import ShowWeapon from "./ShowWeapon"

class DropDownMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listOpen: false,
      eachlistOpen: false,
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
    {console.log(this.props)}
    return (
      <div>
          <div onClick={this.toggleList.bind(this)} style={styles.menuButton}>各武器</div>
        {listOpen &&
         (
           <div>
             <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
               {
                 this.props.weaponName.map(
                   wname =>
                     <div onClick={this.eachList.bind(this,wname.name)} style={styles.menuButton} key={wname.name}>{wname.name}</div>
                 )
               }
             </Animated>           
             {
               eachlistOpen && (
                 <div>
                   {
                   this.props.weapons.weaponStatus.forEach(
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

const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps)(DropDownMenu)
