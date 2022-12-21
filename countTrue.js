//Challenge Name: How Much is True?
//Purpose: counts the number of values that are true in an array
//Input: an array
//Output: a number that represents the quantity of true elements in the array

function countTrue(arr){
    result = 0;
    if (arr.length){
        arr.forEach((element) => {
            if (element) {
                result++;
            }
        })
    }
    return result;
}

module.exports = countTrue;