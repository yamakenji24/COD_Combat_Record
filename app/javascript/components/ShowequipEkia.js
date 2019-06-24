import React from "react"
import {connect,} from "react-redux"
import {Animated} from "react-animated-css"
import Modal from "react-modal"
import customStyles from './../styles/customStyles'
import mapStateToProps from './../mapProps/mapStateToProps'
import mapDispatchToProps from './../mapProps/mapDispatchToProps'

class ShowequipEkia extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      equipStatus: this.props.showequipekia
    }
  }

  render() {
    return (
      <div id="maxekia">
        <p>{this.state.equipStatus[0].groupname}</p>
        <p>{this.state.equipStatus[0].name}</p>
        <div onClick={this.props.handleopenequipModal.bind(this)} key="equipview"id="equipview">View Equip</div>
        <Modal
          isOpen={this.props.modalEquipOpen}
          onRequestClose={this.props.handlecloseequipModal}
          style = {customStyles}
        >
          <Animated animationIn="flipInY" animationOut="flipOutY" isVisible={true}>
            <div onClick={this.props.handlecloseequipModal.bind(this)} id="equipview">Close</div>
          </Animated>
        </Modal>
        
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowequipEkia)
