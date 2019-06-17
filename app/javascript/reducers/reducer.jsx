const initialState = {
  weapons: '',
  maxweapon:[],
  maxequipment:[],
  listOpen: false,
  eachlistOpen: false,
  weaponlistOpen: "null",
  weaponName:[
    {name:"bare_hands"},{ name: "tactical_rifle"},{ name: "equipment"},{ name: "assault_rifle"},
    { name: "shotgun"},{ name: "scorestreak"},{ name: "sniper"},{ name: "specialist"},
    { name: "LMG"},{ name: "launcher"},{ name: "pistol"},{ name: "SMG"},{ name: "gear"},{ name: "weapon_melee"}
  ],
  
}

const reducer = (state,  action) => {
  switch (action.type) {
  case 'ADDWEAPON':{
    //weapons: state.weapons.concat(action.weaponStatus)
  }
  case 'TOGGLELIST': {
    //return console.log(!action.listOpen)
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
  case 'OPENMODAL' : {
    return Object.assign({}, state, {
      modalIsOpen: true,
    });
  }
  case 'CLOSEMODAL': {
    return Object.assign({}, state, {
      modalIsOpen: false,
    });
  }
  default: {
    initialState.weapons = state
    return initialState
  }}
}

export default reducer
