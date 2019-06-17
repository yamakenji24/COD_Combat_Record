import React from "react"
import {connect,} from 'react-redux'
import {Animated} from "react-animated-css"
import ShowMaxStatus from "./ShowMaxStatus"
import Modal from "react-modal"
import mapStateToProps from './../mapProps/mapStateToProps'
import mapDispatchToProps from './../mapProps/mapDispatchToProps'

//Modal.setAppElement('#root')

class ShowmaxEkia extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      maxEkia: this.props.showmaxekia
    }
  }
    
  render() {
    return (
      <div id="maxekia">
        <p>{this.state.maxEkia[0].groupname}</p>
        <p>{this.state.maxEkia[0].name}</p>
        <div onClick={this.props.handleopenModal.bind(this)} id="viewmore">View More</div>
    
          <Modal
            isOpen={this.props.modalIsOpen}
            onRequestClose={this.props.handlecloseModal}
            style={customStyles}
            contentLabel="Open Modal"
          >
            <Animated animationIn="flipInY" animationOut="flipOutY" isVisible={true}>
              <div onClick={this.props.handlecloseModal.bind(this)} id="viewmore">Close</div>
              <ShowMaxStatus maxEkia={this.state.maxEkia} key={this.state.maxEkia[0].id}/>
            </Animated>
          </Modal>
    
      </div>
    )
  }
}

const customStyles = {
  overlay: {
    position: 'fixed',
    width:1200
  },
  content: {
    background:'#CCFFFF',
    width:800
  },
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowmaxEkia)
