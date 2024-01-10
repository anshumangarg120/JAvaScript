const user = {
    username : "anish",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, wellcome to website`);
    }

}

// user.welcomeMessage()

// function ani (){
//     let username = "Anish"
//     console.log(this);
// }
// ani ()

// const ani = () => {
//     let username = "anish"
//     console.log(this);
// }
// ani()

// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  (num1 + num2)


console.log(addTwo(3, 4));