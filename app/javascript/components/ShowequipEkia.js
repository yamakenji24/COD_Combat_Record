import React from "react"
import {Animated} from "react-animated-css"
import Modal from "react-modal"

class ShowequipEkia extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
      equipStatus: this.props.showequipekia
    }
  }

  render() {
    return (
      <div id="maxekia">
        <p>{this.state.equipStatus[0].groupname}</p>
        <p>{this.state.equipStatus[0].name}</p>
      </div>
    )
  }
}

export default ShowequipEkia
