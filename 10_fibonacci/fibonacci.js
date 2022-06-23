const fibonacci = function(l) {
    let num1 =0;
    let num2 = 1;
    let next;
    l = parseInt(l);
    if(l<0){
        return "OOPS";
    }else{
        for(i=1;i<=l; i++){
            next = num1+num2;
            num1=num2;
            num2 =next;
        }
    }
    
return num1;
};
//0 next =0+1 num1=1 num2 =1
// 1 next 1+1 num1 =1 num2 =2
// 1 next 1+2 num1 =2 num2 = 3
// 2

// Do not edit below this line
module.exports = fibonacci;
