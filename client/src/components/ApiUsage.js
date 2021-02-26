const ApiUsage = ({setShowApi, showApi}) => {
  return (
    <div className="api">
      <div><h3 onClick={() => setShowApi(!showApi)}className="api-example" >Example API usage</h3></div>
      {showApi && <>
        <code>/api/convert?input=4gal</code><br/>
      <code>/api/convert?input=1/2km</code><br/>
      <code>/api/convert?input=5.4/3lbs</code><br/>
      <code>/api/convert?input=kg</code><br/>
      <h4>Example return</h4>
      <code>&#123; initNum: 3.1, initUnit: 'mi', returnNum: 4.98895, returnUnit: 'km', string: '3.1 miles converts to 4.98895 kilometers' &#125;</code>
      </>
      }
      
    </div>

  )
}

export default ApiUsage
