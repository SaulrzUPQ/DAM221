console.log( "hola mundo NODE");

let edad1= 20;
let edad2= 7;

console.log("edad promedio:");
console.log((edad1+edad2)/2);


console.log("-----medir procesos----");
console.time("miProceso")
for(i=0;i < 1000000; i++){}
console.timeEnd("miProceso")