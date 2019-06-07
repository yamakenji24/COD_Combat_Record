import React from "react"

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
          { props.weaponstatus }
        </tbody>
      </table>
    </div>
  )
}
export default StatusList
