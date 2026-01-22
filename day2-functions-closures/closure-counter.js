function counter(){
    let count = 0 ;
    return function increaseCounterValue(){
        count++ ;
        return count ;
    }
}

let countValue = counter() ;
console.log(countValue());
console.log(countValue());
console.log(countValue());