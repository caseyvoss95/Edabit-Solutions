//Challenge Name: Convert a Number to Base-2
//Purpose: convert base-10 number to binary
//Input: Non-Negative Integer (type: number)
//Output: A string composed of 1's and 0's that represents a binary number
//        Returns false if input is anything other than a non-negative number

function binary(decimal) {
    //check for invalid input
    if (decimal < 0 || typeof decimal != "number") {
        return false;
    }
    
    //check for special cases
    if (decimal < 2){
          return decimal.toString();
      }
    
    //build binary string
    let result = []; 
    let place = 2 //base 2 establishsed

    //find highest digit
    while (decimal >= place) {
          place = place * 2;
      }
    
    //push first digit
    place = place / 2;
    let sum = place
    result.push('1');
  
    //push remaining digits
    while (place != 1){
      place = place / 2;
      if (sum + place <= decimal){
        result.push('1');
        sum = sum + place;
      }
      else {
        result.push('0')
      }
    }
    return result.join('');
  }

  module.exports = binary;