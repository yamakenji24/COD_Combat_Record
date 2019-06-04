class DropDownMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listOpen: false,
      weaponStatus: this.props.weaponStatus
    }

  }
  
  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen,
    }))
  }

  handleClickMenu(val) {
    this.setState({
      listOpen: false,
    })
    alert(val)
  }

  handleClickOutside() {
    this.setState({
      listOpen: false,
    })
  }

  render() {
    const {listOpen} = this.state
    return (
      <div>
        <div onClick={this.toggleList.bind(this)} style={styles.menuButton}>
          各武器
        </div>
        {listOpen && (          
          <table>
            <tr>
              <th>Weapon</th>
              <th>Kill</th>
              <th>Death</th>
              <th>HeadShot</th>
              <th>Assist</th>
              <th>Ekia</th>
              <th>Accuracy</th>
              <th>TimeUsed</th>
            </tr>
            <tbody>
              {this.state.weaponStatus.map(
                (weaponStatus) =>
                  <div onClick={this.handleClickMenu.bind(this,{weaponStatus})}>
                    <tr>
                      <td>{weaponStatus.name}</td>
                      <td>{weaponStatus.kill}</td>
                      <td>{weaponStatus.death}</td>
                    </tr>
                  </div>
              )}
            </tbody>
          </table>
        )}
     </div>
    )
  }
}

const DropList=(props)=> {
  const {listOpen} = this.state.listOpen
  return (
    <div style={styles.dropDownMenu}>
      {listOpen && (
        <div style={styles.menuBox}>
          <div style={styles.menuContent}>
            <div onClick={this.handleClickMenu.bind(this, 1)}>{props.weaponstatus.name}</div>
          </div>
        </div>
      )}
    </div>
  )
}

const styles = {
  dropDownMenu: {
    position: 'relative',
  },
  menuButton: {
    display: 'inline',
    cursor: 'pointer',
    border: '1px solid black',
    padding: '5px 8px',
  },
  menuBox: {
    position: 'absolute',
    top: '35px',
    width: '600px',
    zIndex: 1,
    cursor: 'pointer',
    border: '1px solid black',
  },
  menuContent: {
    padding: '3px 5px',
    borderBottom: '1px solid black',
  },
  lastMenuContent: {
    padding: '3px 5px',
  },
}

