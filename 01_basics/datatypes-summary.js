// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null // null
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 12739873987298372n;

// Reference (Non primitive) 
// Array, Object, Functions

const heros = ["shaktiman", "naagraj", "doga" ];

let myObj = {
    name: "Anish",
    age: 23,

}

const myFunction = function (){
    console.log("Hellow World");
}

console.log(typeof (outsideTemp) );
