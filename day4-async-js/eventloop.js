function add(a , b){
    console.log(a+b);
}

//setTimeout

setTimeout(()=>{
    console.log("this is setTimeout");
    add(3,4);
});


setImmediate(()=>{
    console.log("this is setImmediate");
    add(2,1);
});


process.nextTick(()=>{
    console.log("this is next tick");
    add(5,4);
});

