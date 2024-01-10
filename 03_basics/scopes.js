
var c = 300

if (true) {
    let a = 10;
    const b = 20;
    var c = 30 ;
   // console.log("INNER", a);  
}


//console.log(c);
// console.log(b);
// console.log(c);


// nasted scopes

function one (){
    const username = "Anish"
    
    function two() {
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}

// one()

if (true){
    const username = "Anish"
    if (username === "Anish") {
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++++ interesting ++++++++++++++++++++++++++

function addone (num) {
    return num + 1
}
addone(5)

const addTwo = function(num) {
    return num + 2
}

addTwo(5)