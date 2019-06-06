//import _ from 'lodash';

class DropDownMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listOpen: false,
      eachlistOpen: false,
      weaponStatus: this.props.weaponStatus,
      weaponName:[
        {name:"bare_hands"},{ name: "tactical_rifle"},{ name: "equipment"},{ name: "assault_rifle"},
        { name: "shotgun"},{ name: "scorestreak"},{ name: "sniper"},{ name: "specialist"},
        { name: "LMG"},{ name: "launcher"},{ name: "pistol"},{ name: "SMG"},{ name: "gear"},{ name: "weapon_melee"} 
      ],
      weaponlistOpen: "null"
    }
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen,
    }))
  }
  
  eachList(val) {
    this.setState(prevState => ({
      eachlistOpen: !prevState.eachlistOpen,
      weaponlistOpen: val
    }))
  }
  
  
  handleClickMenu(val) {
    this.setState({
      listOpen: false,
      eachlistOpen: false,
    })
    alert(val)
  }
    
  handleClickOutside() {
    this.setState({
      listOpen: false,
    })
  }

  render() {
    const {listOpen, eachlistOpen} = this.state
    const weapons = []

    function PushWeapon(val) {
      return val
    }
    
    return (
      <div>
        <div onClick={this.toggleList.bind(this)} style={styles.menuButton}>各武器</div>
        {listOpen &&
         (
         <div>
           {
             this.state.weaponName.map(
               wname =>
                 <div onClick={this.eachList.bind(this,wname.name)} style={styles.menuButton} key={wname.name}>{wname.name}</div>
             )
           }
           
           {
             eachlistOpen && (
               <div>
                 {
                   this.state.weaponStatus.forEach(
                     getweapon =>
                       {   
                         if(getweapon.groupname == this.state.weaponlistOpen) {
                           weapons.push(
                             <ShowWeapon key={getweapon.id} showweapon={getweapon} />
                           )
                         }
                       }
                   )
                 }
                 <StatusList weaponstatus={weapons} />
               </div>
             )
           }
         </div>
         )
        }
      </div>
    )
  }
}
const StatusList=(props)=>{
  return(
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
          {
            props.weaponstatus
            //<ShowWeapon showweapon={props.weaponstatus} />
            //console.log(props.weaponstatus)
            /*
            props.weaponstatus.forEach(
              (eachvalue) =>
                {
                  return <ShowWeapon showweapon={eachvalue.value} />   
                }
            )*/
            
          }
        </tbody>
      </table>
    </div>
  )
}

const ShowWeapon=(props)=>{
  console.log(props.showweapon)
  const {name, kill, death, headshot, assist, ekia, accuracy, timeused} = props.showweapon
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

const styles = {
  dropDownMenu: {
    position: 'relative',
  },
  menuButton: {
    display: 'inline',
    cursor: 'pointer',
    border: '1px solid black',
    padding: '3px 8px',
  },
  menuBox: {
    position: 'absolute',
    top: '40px',
    width: '800px',
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

