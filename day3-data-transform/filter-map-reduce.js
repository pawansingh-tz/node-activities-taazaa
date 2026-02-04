const users = [
    {id:1,name:"Alice" , age:28 , active:true , purchases:120},
    {id:2,name:"Bob", age:17,active:false,purchases:60},
    {id:3,name:"Sara",age:34,active:true,purchases:300},
    {id:4,name:"Dan",age:30,active:true,purchases:0}
];


function temporary (user){
    console.log("hello");
}


//**********************************
// filter active users only 
const activeUsers = users.filter(
    user => user.active  
    //user => temporary(user)
);

//console.log(activeUsers);
//console.log(JSON.stringify(activeUsers, null, 2));
console.log("active users:",JSON.stringify(activeUsers));



//**********************************
//  The thing you really need in the end, 
// though, is an array containing only the id and name and expenses of each user
const userIdAndName = users.map(
    user => (
        {
            id: user.id,
            name:user.name,
            expense: user.purchases
        }
    )
);
console.log("mapped users:",JSON.stringify(userIdAndName));



//reduce – aggregates the data
//Total purchases by active users

const sumOfExpenses = users.reduce(
    (sum,user) =>{
     return user.active ? sum + user.purchases:sum;
    }
,0);

console.log("sum of all the expenses:",JSON.stringify(sumOfExpenses));


