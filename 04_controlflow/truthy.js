const userEmail = "a@anish.ai"

if (userEmail){
 console.log("got user email");
} else {
    console.log("don't hove user email");
}

// falsy values 
// false, 0, -0, BigInt 0n, unll, undefined, NaN 

// truthy values
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0 ) {
    console.log("Array is empty");
}

// Nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? null 
// val1 =  null ?? undefined 

// console.log(val1);


// -----------------------------------


// Terniary operator

condition ? true : false 

const iceTeaPrice = 100
