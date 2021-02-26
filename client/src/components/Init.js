const Init = ({ initNum, unitList,onNumChange, onUnitChange }) => {

  const unitOption = unitList.map(el => {
    return (
      <option value={el} key={el}>{el}</option>
    )
  })

  return (
    <div>
    <div>
      <input value={initNum} onChange={onNumChange}/>
    </div>
    <div>
      <select onChange={onUnitChange}>{unitOption}</select>
    </div>
  </div>
  )
}

export default Init
