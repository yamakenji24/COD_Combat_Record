import React,{Component} from "react"
import DropDownMenu from './DropDownMenu';

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

        {console.log(this.state.weaponStatus)}
        <h1>各戦績</h1>      
        <DropDownMenu weaponStatus={this.state.weaponStatus} />
      </div>
    )
  }

}
export default WeaponStatus
