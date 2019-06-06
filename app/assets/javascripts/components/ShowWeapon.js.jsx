const ShowWeapon=(props)=>{
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
