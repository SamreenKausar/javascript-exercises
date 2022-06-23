const palindromes = function (stringVal) {
 const re =/[^a-zA-Z0-9]/g;
 const str =stringVal.toLowerCase().replace(re , '');
 const length = str.length;
 for(i=0; i<length/2; i++){
    if(str[i]!=str[length-i-1]){
        return false;
    }
 }
 return true;
};

// Do not edit below this line
module.exports = palindromes;
