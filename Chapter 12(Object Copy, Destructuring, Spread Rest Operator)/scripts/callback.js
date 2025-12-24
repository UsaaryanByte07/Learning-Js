function hello(Name){
    alert("Hello "+Name);
}

function processUserInput(callback){
    let userInput = prompt("Enter Your Name: ");
    callback(userInput);
}

let capitalize = function(Name){
    alert("The Name in Capital is " + Name.toUpperCase())
}

// function(Name){
// This is called a Anonymous Function a function with no name and generally used passing as a argument
//     alert("The Name in Capital is " + Name.toUpperCase())
// }

processUserInput(hello);
processUserInput(capitalize);