// console.log("learning asynchronous javascript");

// async function getDataFromUrl(){
//      let result = await fetch("https://jsonplaceholder.typicode.com/posts");
//      console.log(await result.json());
// }
// getDataFromUrl();
// //let result = fetch("https://jsonplaceholder.typicode.com/posts");
// console.log("async function execution completed");




async function asyncFunction(){
  let result = await fetch("https://jsonplaceholder.typicode.com/posts");

  console.log(await result.json());
}

console.log("learning asynchronous javascript");

asyncFunction() ;
console.log("end!");

