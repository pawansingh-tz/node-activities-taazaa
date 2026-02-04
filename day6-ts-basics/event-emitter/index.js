const EventEmitter = require("events");

const emitter = new EventEmitter() ;


//define event listener 

emitter.on ("greet" , (user)=>{
    console.log(`hello , this is ${user}`);
});

// call the e
emitter.emit("greet" , 'pawan');