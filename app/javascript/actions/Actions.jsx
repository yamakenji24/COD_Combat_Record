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
  openweaponModal(user) {
    return {
      type: 'OPENWEAPONMODAL',
      user
    }
  },
  closeweaponModal(user) {
    return {
      type: 'CLOSEWEAPONMODAL',
      user
    }
  },
  openequipModal() {
    return {
      type: 'OPENEQUIPMODAL',
    }
  },
  closeequipModal() {
    return {
      type: 'CLOSEEQUIPMODAL',
    }
  },
}

export default Actions
