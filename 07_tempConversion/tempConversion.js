const ftoc = function(f) {
let c = ((f-32)*5)/9;
let round = Math.round(c*10)/10;
return round;
};

const ctof = function(c) {
 let f = ((c*9)/5) + 32;
 let round = Math.round(f*10)/10;
 return round;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
