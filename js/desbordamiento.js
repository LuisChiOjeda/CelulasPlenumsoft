let num = prompt("Numero:")
let x = new ArrayBuffer(32);
let numCopy = num.toString().split('').reverse().join('');  
(num <= x) ? console.log(numCopy): console.log(0);;