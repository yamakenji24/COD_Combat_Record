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
    handleopenweaponModal(user) {
      dispatch(Actions.openweaponModal(user))
    },
    handlecloseweaponModal() {
      dispatch(Actions.closeweaponModal())
    },
    handleopenequipModal() {
      dispatch(Actions.openequipModal())
    },
    handlecloseequipModal() {
      dispatch(Actions.closeequipModal())
    },
    handleGetMaxStatus(weapon) {
      dispatch(Actions.getmaxWpEp(weapon))
    },
  }
}

export default mapDispatchToProps
