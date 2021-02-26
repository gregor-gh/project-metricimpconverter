const Return = ({ returnNum, returnUnit }) => {
  return (
    <div>
    <div>
      <input value={returnNum} readOnly/>
    </div>
    <div>
      {returnUnit}
    </div>
  </div>
  )
}

export default Return
