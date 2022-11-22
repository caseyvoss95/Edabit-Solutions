//Purpose: convert base-10 number to binary
//Input: Non-Negative Integer (type: number)
//Output: A string composed of 1's and 0's that represents a binary number
function binary(decimal) {
    if (decimal < 2){
          return decimal.toString();
      }
    let result = [];
      let place = 2
      while (decimal >= place) {
          place = place * 2;
      }
    place = place / 2;
    let sum = place
    result.push('1');
  
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