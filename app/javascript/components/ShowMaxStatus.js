import React from "react"
import {Animated} from "react-animated-css"

const ShowMaxStatus = (props) => {
  const maxweapon =  props.maxEkia
  
  return (
    <div>
      <h2>{maxweapon[0].groupname}</h2>
      <h2>{maxweapon[0].name}</h2><br></br>
      <div id="left">
        <h4>EKIA/D RATIO</h4>
        <p>{(maxweapon[0].ekia/maxweapon[0].death).toFixed(2)}</p>
        <h4>EKIA</h4>
        <p>{maxweapon[0].ekia}</p>
      </div>

      <div id="right">
        <h4>HEADSHOTS</h4>
        <p>{maxweapon[0].headshot}</p>
        <h4>DEATHS</h4>
        <p>{maxweapon[0].death}</p>
      </div>
      <div id="center">
        <h4>ADDITIONAL STATUS</h4>
        <p> kills:  {maxweapon[0].kill}</p>
        <p> K/D RATIO:{(maxweapon[0].kill/maxweapon[0].death).toFixed(2)} </p>
        <p> ACCURACY: {(maxweapon[0].accuracy*100).toFixed(2)}%</p>
        <p> DAMAGE: </p>
      </div>
    </div>
  )
}

export default ShowMaxStatus
