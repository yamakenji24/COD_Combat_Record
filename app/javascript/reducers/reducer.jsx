import initialState from './../initialState/initialState'

const reducer = (state,  action) => {
  switch (action.type) {
  case 'TOGGLELIST': {
    return Object.assign({},state,{
      listOpen: !action.listOpen
    });
  }
  case 'EACHLIST': {
    return Object.assign({}, state,{
      eachlistOpen: true,
      weaponlistOpen: action.value
    });
  }
  case 'GETMAXSTATUS': {
    return Object.assign({}, state,{
      maxweapon: action.weapon,
    });
  }
  case 'OPENWEAPONMODAL' : {
    return Object.assign({}, state, {
      modalWeaponOpen: true,
    });
  }
  case 'CLOSEWEAPONMODAL': {
    return Object.assign({}, state, {
      modalWeaponOpen: false,
    });
  }
  case 'OPENEQUIPMODAL': {
    return Object.assign({}, state, {
      modalEquipOpen: true,
    });
  }
  case 'CLOSEEQUIPMODAL': {
    return Object.assign({}, state, {
      modalEquipOpen: false,
    });
  }
  default: {
    initialState.weapons = state
    return initialState
  }}
}

export default reducer
