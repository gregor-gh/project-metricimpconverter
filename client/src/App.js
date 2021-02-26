import { useState, useEffect } from "react"
import './App.css';
import Header from "./components/Header.js"
import Converter from "./components/Converter.js"
import ApiUsage from "./components/ApiUsage.js"

function App() {

  const [ initNum, setInitNum ] = useState("1")
  const [ initUnit, setInitUnit ] = useState("mi")
  const [ returnNum, setReturnNum ] = useState("1")
  const [ returnUnit, setReturnUnit ] = useState("km")
  const [ showApi, setShowApi ] = useState(false)
  const unitList = ["mi","km","gal","L","lbs","kg"]

  // send the api request to conver unit
  const calcConv = async () => {
    try {
      const response = await fetch(`/api/convert?input=${initNum}${initUnit}`)
      const data = await response.text()

      // silly check to see if response is in right format (don't want to change the API response in case it fails fCC tests)
      if(data.startsWith("{\"init")) {
        const json = JSON.parse(data)
        setReturnNum(json.returnNum)
        setReturnUnit(json.returnUnit)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // eslint-disable-line react-hooks/exhaustive-deps
    calcConv()
  },[initNum,initUnit])

  const onNumChange= (e) => {
    setInitNum(e.target.value)
  }
  const onUnitChange = (e) => {
    setInitUnit(e.target.value)
  }

  return (
    <div className="App">
      <Header />
      <Converter initNum={initNum} 
        unitList={unitList} 
        onNumChange={onNumChange}
        onUnitChange={onUnitChange}
        returnNum={returnNum}
        returnUnit={returnUnit}/>
      <ApiUsage showApi={showApi}
        setShowApi={setShowApi}/>
    </div>
  );
}

export default App;
