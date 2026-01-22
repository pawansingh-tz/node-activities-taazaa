
//sumOfNum is a Higher order function : acception a function as an argument 
//cb is a callback function: a function which is passed as an argument is callback function
function sumOfNum (a , b , cb ){
    let ans = a+b ;
    cb(ans);
}

function printResult(val){
    console.log(val);
}

sumOfNum(45 ,5,printResult);