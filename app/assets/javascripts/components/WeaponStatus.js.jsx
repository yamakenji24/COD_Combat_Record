class WeaponStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialStatus: this.props.weaponstatus,
      weaponstatus:[],
      isLoading: true
    }
  }
  
  componentDidMount() {
    this.setState({
      weaponstatus: this.state.initialStatus
    })
  }
  render() {
    return (
      <div>
        <h1>各戦績</h1>
        <StatusList weaponstatus={this.state.weaponstatus} /> 
      </div>
    )
  }
}

const StatusList=(props)=> {
  return (
    <div>
      <table className="weaponstatus">
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
          {props.weaponstatus.map((weaponstatus) =>
                                  <StatusItem weaponstatus={weaponstatus} key={weaponstatus.id} />)}          
        </tbody>
      </table>
    </div>
  )
}

const StatusItem = (props) => {
  const {name,kill, death, headshot, assist, ekia, accuracy, timeused} = props.weaponstatus
  
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

