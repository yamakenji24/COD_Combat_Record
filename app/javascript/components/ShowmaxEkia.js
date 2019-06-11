import React from "react"
import {Animated} from "react-animated-css"
import ShowMaxStatus from "./ShowMaxStatus"
import Modal from "react-modal"

//Modal.setAppElement('#root')

class ShowmaxEkia extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
      maxEkia: this.props.showmaxekia
    }
  }
  openModal(user) {
    this.setState({
      modalIsOpen: true
    })
  }
  closeModal() {
    this.setState({
      modalIsOpen: false
    })
  }
  
  render() {
    return (
      <div id="maxekia">
        {this.state.maxEkia[0].groupname}
        {<p></p>}
        {this.state.maxEkia[0].name}{<p></p>}
        <div onClick={this.openModal.bind(this)} id="viewmore">View More</div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Open Modal"
        >
          <div onClick={this.closeModal.bind(this)} id="viewmore">Close</div>
          <ShowMaxStatus maxEkia={this.state.maxEkia} key={this.state.maxEkia[0].id}/>
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

export default ShowmaxEkia
