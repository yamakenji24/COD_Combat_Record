import React,{Component} from 'react'
import DropDownMenu from './DropDownMenu'
import MaximumEkia from './MaximumEkia'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers/reducer'

const store = createStore(reducer)

class WeaponStatus extends React.Component {

  render() {
    return (
      <div>
        <Provider store={store} >
          <MaximumEkia weaponStatus={this.props.weaponStatus}/>
          <h1>各戦績</h1>      
          <DropDownMenu weaponStatus={this.props.weaponStatus} />
        </Provider>
      </div>
    )
  }

}
export default WeaponStatus
