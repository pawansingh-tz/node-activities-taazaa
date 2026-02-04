// here we transform each element into its length


//map
let arr = ["Bilbo", "Gandalf", "Nazgul"] ;

//here if we are using {} inside the callback function then we have to use return 
let length = arr.map((item)=>{return  item.length});
console.log(length);




let nums = [1, 2, 3, 4, 5];

// reduce typically takes a callback function and a default value 
let summation = nums.reduce((sum,value)=> {
    return sum+value;
},0);
console.log(summation);




const array =[1,2,3,4];

const moreNum= [ ...array, 5,6,7];
// console.log(array.concat(moreNum));
//console.log(array);
 console.log(moreNum);





