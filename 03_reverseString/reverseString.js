const reverseString = function( stringValue) {
    let reverseStringVal ='';
    for(i=stringValue.length-1; i>=0 ; i--){
        reverseStringVal = reverseStringVal + stringValue[i];
    }
    return reverseStringVal;
};

// Do not edit below this line
module.exports = reverseString;
