import React from "react"
import {Animated} from "react-animated-css"

const StatusList=(props)=>{
  return(
    <div>
      <Animated animationIn="fadeInDown" animationOut="fadeOutUp" isVisible={true}>
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
          { props.weaponstatus }
        </tbody>
      </table>
      </Animated>      
    </div>
  )
}
export default StatusList
