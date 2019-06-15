const initialState = {
  weapons: '',
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
  case 'GETWEAPON': {
    return !state
  }
  default: {
    initialState.weapons = state
    return initialState
  }
  }
}

export default reducer
