const repeatString = function(stringValue, num) {
let repeatedString ='';
if(num>=0){
    for(i=0; i<num; i++){
        repeatedString +=stringValue; 
    }
    return repeatedString;
}else{
    return 'ERROR';
}

};

// Do not edit below this line
module.exports = repeatString;
