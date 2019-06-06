
class WeaponStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weaponStatus: this.props.weaponStatus,
      isLoading: true
    }
  }
  
  render() {
    return (
      <div>
        <h1>各戦績</h1>
        <DropDownMenu weaponStatus={this.state.weaponStatus} />
      </div>
    )
  }
}
