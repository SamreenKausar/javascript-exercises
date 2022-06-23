const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(a) {
  let sum =0;
	a.forEach(element => {
    sum +=element; 
  });
  return sum;
};

const multiply = function(a) {
let product = 1;
a.forEach(element => {
 product= product* element;
});
return product;
};

const power = function(a, n) {
  let power =1;
	for(i=0; i<n; i++){
    power= power*a;
  }
  return power;
};

const factorial = function(a) {
	let factorial= 1;
  while(a){
    factorial=factorial*a;
    a--;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
