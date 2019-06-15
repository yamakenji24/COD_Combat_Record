import React,{Component} from 'react'
import DropDownMenu from './DropDownMenu'
import MaximumEkia from './MaximumEkia'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './../reducers/reducer'
import Actions from './../actions/Actions'
import AppDropMenu from './../containers/AppDropMenu'

class WeaponStatus extends React.Component {  
  render() {
    const initialState = {
      weaponStatus: this.props.weaponStatus
    }
    const store = createStore(reducer, initialState)
    return (
      <div>
        <Provider store={store}>
          <AppDropMenu />
        </Provider>
      </div>
    )
  }
}

export default WeaponStatus
