const removeFromArray = function(...theArgs) {
    let testArray =theArgs[0];
    let newArray =[];
    testArray.forEach(element => {
        if(!theArgs.includes(element)){
            newArray.push(element);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
