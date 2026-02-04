console.log("learning promises");

let result = fetch("https://jsonplaceholder.typicode.com/posts").then(
    (data) => console.log(data.json())
).catch(
    (error) => console.log(error)
).finally(
    ()=> console.log("finally executed")
);  

console.log("end!");
