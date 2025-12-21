let person = {
    Name: "Ramesh",
    gender: "Male",
    Age: 23,
    City: "Palghar",
}

let jsonString = JSON.stringify(person);
console.log(jsonString);

let jsonObject = JSON.parse(jsonString);
console.log(jsonObject);

console.log("Name: ",jsonObject.Name);
console.log("Gender: ",jsonObject.gender);
console.log("Age: ",jsonObject.Age);
console.log("City: ",jsonObject.City);