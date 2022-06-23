const findTheOldest = function(people) {
    let oldest;
    oldest = people.sort((a, b) =>{
        let presentYear = new Date().getFullYear();
        
        const last= a.yearOfDeath==undefined ? presentYear - a.yearOfBirth :  a.yearOfDeath -a.yearOfBirth;
        const next= b.yearOfDeath==undefined ? presentYear - b.yearOfBirth :  b.yearOfDeath -b.yearOfBirth;
        return last>next? -1:1;
    
    });
    return oldest[0];
    };

// Do not edit below this line
module.exports = findTheOldest;
