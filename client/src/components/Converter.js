import Init from "./Init.js"
import Return from "./Return.js"

const Converter = ({ unitList, initNum, onNumChange, onUnitChange,returnNum, returnUnit }) => {
  return (
    <div id="conv">
      <Init 
        unitList={unitList} 
        initNum={initNum}
        onNumChange={onNumChange}
        onUnitChange={onUnitChange}

        />
        <div>=</div>
      <Return 
        returnUnit={returnUnit}
        returnNum={returnNum}/>
    </div>
  )
}

export default Converter
