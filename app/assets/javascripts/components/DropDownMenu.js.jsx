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
      ]
    }

  }
  
  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen,
    }))
  }
  
  eachList(val) {
    console.log(val)
    this.setState(prevState => ({
      eachlistOpen: !prevState.eachlistOpen,
      
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
    
    return (
      <div>
        <div onClick={this.toggleList.bind(this)} style={styles.menuButton}>
          各武器
        </div>
        {listOpen &&
         (
           <div>
             {
                 this.state.weaponName.map(
                   wname => 
                     <div onClick={this.eachList.bind(this)} style={styles.menuButton}>{wname.name}</div>
                 )
             }
               
             <table>
               {eachlistOpen &&(
                 <div>
                   <thead>
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
                   </thead>
                   <tbody>                          
                     {this.state.weaponStatus.map(
                       (weaponStatus) =>
                         <tr onClick={this.handleClickMenu.bind(this,{weaponStatus})}>
                           <td>{weaponStatus.name}</td>
                           <td>{weaponStatus.kill}</td>
                           <td>{weaponStatus.death}</td>
                           <td>{weaponStatus.headshot}</td>
                           <td>{weaponStatus.assist}</td>
                           <td>{weaponStatus.ekia}</td>
                           <td>{weaponStatus.accuracy}</td>
                           <td>{weaponStatus.timeused}</td>
                         </tr>
                       
                     )}
                   </tbody>
                 </div>
               )}
             </table>
           </div>
         )}
      </div>
    )
  }
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

