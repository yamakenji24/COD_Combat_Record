import React, {Component} from "react"
import Actions from './../actions/Actions'

const mapDispatchToProps = (dispatch) => {
  return {
    handletoggleList(listOpen) {
      dispatch(Actions.toggleList(listOpen))
    },
    handleeachList(value) {
      dispatch(Actions.eachList(value))
    },
    handleopenModal(user) {
      dispatch(Actions.openModal(user))
    },
    handlecloseModal() {
      dispatch(Actions.closeModal())
    },
    handleGetMaxStatus(weapon) {
      dispatch(Actions.getmaxWpEp(weapon))
    },
  }
}

export default mapDispatchToProps
