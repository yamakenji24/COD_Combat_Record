import React, {Component} from "react"
import {connect,} from 'react-redux'
import DropDownMenu from './../components/DropDownMenu'
import MaximumEkia from './../components/MaximumEkia'
import Actions from './../actions/Actions'
import mapStateToProps from './../mapProps/mapStateToProps'
import mapDispatchToProps from './../mapProps/mapDispatchToProps'

class AppDropMenu extends React.Component {
  render() {
    
    return (
      <div>
        <MaximumEkia />
        <h1>各武器詳細</h1>
        <DropDownMenu />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppDropMenu)
