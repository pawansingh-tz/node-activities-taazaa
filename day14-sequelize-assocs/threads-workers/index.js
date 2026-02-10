const {Worker}  = require('worker_threads');

function runWorker() {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js');

        worker.on('message', resolve);
        worker.on('error', reject);
    });
}


async function fun(){
    console.log("starting worker ...");
    const result = await runWorker();
    console.log("worker result:" , result);
    
}
 
fun() ;
console.log("Final statement executed in index.js");