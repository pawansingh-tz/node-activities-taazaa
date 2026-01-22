let num = 17 ;
let count = 0 ;
for ( let i = 1 ; i <= num ; i++) {
    if ( num % i === 0 ){
        count ++ ;
    }
}
//console.log(count);
if ( count === 2 ) console.log("this is a prime number");
else console.log("this is not a prime number");

