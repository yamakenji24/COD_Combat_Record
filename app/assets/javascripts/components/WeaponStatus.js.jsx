
class WeaponStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weaponStatus: this.props.weaponStatus,
      isLoading: true
    }
  }
  
  render() {
//  <StatusList weaponStatus={this.state.weaponStatus} />  
    
      return (
        <div>
          <h1>各戦績</h1>
          <DropDownMenu weaponStatus={this.state.weaponStatus} />

        </div>
      )
  }
}

const StatusList=(props)=> {
  return (
    <div>
      <table className="weaponStatus">
        <thead data-type="ok">
          <tr>
            <th>Weapon名</th>
            <th>Kill数</th>
            <th>Death数</th>
            <th>HeadShot数</th>
            <th>Assist数</th>
            <th>Ekia</th>
            <th>Accuracy</th>
            <th>TimeUsed</th>
          </tr>
        </thead>
        <tbody>
          {props.weaponStatus.map((weaponStatus) =>
                                  <StatusItem weaponStatus={weaponStatus} key={weaponStatus.id} />)}          
        </tbody>
      </table>
    </div>
  )
}

const StatusItem = (props) => {
  const {name,kill, death, headshot, assist, ekia, accuracy, timeused} = props.weaponStatus
  
  return (
    <tr>
      <td>{name}</td>
      <td>{kill}</td>
      <td>{death}</td>
      <td>{headshot}</td>
      <td>{assist}</td>
      <td>{ekia}</td>
      <td>{accuracy}</td>
      <td>{timeused}</td>
    </tr>
  )
}

