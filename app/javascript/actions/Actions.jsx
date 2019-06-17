const Actions = {
  addWeapon(weaponStatus) {
    return {
      type: 'ADDWEAPON',
      weaponStatus,
    }
  },
  toggleList(listOpen) {
    return {
      type: 'TOGGLELIST',
      listOpen,
    }
  },
  eachList(value) {
    return {
      type: 'EACHLIST',
      value,
    }
  },
  getmaxWpEp(weapon) {
    return {
      type: 'GETMAXSTATUS',
      weapon,
    }
  },
  openModal(user) {
    return {
      type: 'OPENMODAL',
      user
    }
  },
  closeModal(user) {
    return {
      type: 'CLOSEMODAL',
      user
    }
  },
}

export default Actions
