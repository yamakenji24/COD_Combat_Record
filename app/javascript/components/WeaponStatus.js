import React,{Component} from "react"
import DropDownMenu from './DropDownMenu'
import MaximumEkia from './MaximumEkia'

class WeaponStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weaponStatus: this.props.weaponStatus,
      isLoading: true
    }
  }
  render() {
    return (
      <div>
        <MaximumEkia weaponStatus={this.state.weaponStatus}/>
        <h1>各戦績</h1>      
        <DropDownMenu weaponStatus={this.state.weaponStatus} />
      </div>
    )
  }

}
export default WeaponStatus
