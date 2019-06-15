const Actions = {
  addWeapon(weaponStatus) {
    return {
      type: 'ADDWEAPON',
      weaponStatus,
    }
  },
  changelistStatus(listOpen) {
    return {
      type: 'CHANGELISTSTATUS',
      listOpen,
    }
  },
}

export default Actions
