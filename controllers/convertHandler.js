/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {

  // regex for finding first letter (to determine start of unit)
  const letterRegex = /[a-z]/i;

  // object for looking up conversion units, [0] is the correct case, [1] is the conversion unit
  const convObj = {
    "gal": ["gal","L"],
    "l": ["L","gal"],
    "mi": ["mi","km"],
    "km": ["km","mi"],
    "lbs": ["lbs","kg"],
    "kg": ["kg","lbs"]
  }


  
  this.getNum = function(input) {



    // find index of first letter
    const index = input.match(letterRegex).index;

    // if index is zero then return null as there is no number
    if(index===0) return null;

    // fetch all characters prior to that first letter
    const gotNum = input.substring(0,index);

    // regex for finding valid number or division
    const numRegex = /^\d+\.?\d*\/?\d*\.?\d*/;

    // now extract a valid number from start of the input
    const extractedNum = gotNum.match(numRegex)[0];

    // and compare to the start of the input, if there is a difference it's an invalid number
    if(extractedNum==gotNum)
         return eval(extractedNum); // return the extracted number evaluated (to apply division)
    else 
      return null; //invalid
  }

  
  this.getUnit = function(input) {

    // get indexes based on first letter (which should be start of unit)
    const index = input.match(letterRegex).index;
    // and length-1, end of input
    const endIndex = input.length;

    // if no letters found then no unit, return null
    if(index===endIndex)
      return null;

    // get unit text based on indexes
    const gotUnit = input.substring(index,endIndex);

    // look up the unit
    const unitArr = convObj[gotUnit.toLowerCase()];
    
    // check if unit exists, if so return unit in it's correct case
    if(unitArr) 
      return unitArr[0];
    // otherwise return null
    else 
      return null;

  };
  
  this.getReturnUnit = function(initUnit) {

    // look up initunit in convobject
    const unitArr = convObj[initUnit.toLowerCase()];

    // if exists then return the conv unit
    if(unitArr) 
      return unitArr[1];
    else 
      return null;

  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    // conversion constants
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;


    let result;

    // swithc on the init unit to figure out the sum
    switch(initUnit) {
      case "gal": 
        result = initNum *= galToL; 
        break;
      case "L": 
        result = initNum /= galToL;
        break;
      case "lbs": 
        result = initNum *= lbsToKg;
        break;
      case "kg": 
        result = initNum /= lbsToKg;
        break;
      case "mi": 
        result = initNum *= miToKm;
        break;
      case "km": 
        result = initNum /= miToKm;
        break;
      default: 
        return null;
    }
 
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum}` // TODO add full spelling to obj

    
    return result;
  };
  
}

module.exports = ConvertHandler;
