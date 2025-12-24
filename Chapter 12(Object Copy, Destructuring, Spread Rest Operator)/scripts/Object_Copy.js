let student1 = {
    name: "Aryan",
    surname: "Upadhyay",
    age: 45,
    course: "BTech",
    year: "SY",
    address: {
        houseNum: 23,
        buildingName: "Swaraj Park",
        city: "borivali",
        district: "Mumbai",
        state: "Maharasthra",
    }
}

console.log("Before the Change:");
console.log("Original Student: ", student1);
let studentCopy = copyObj(student1);
console.log("Copy Student: ", studentCopy);
studentCopy.age = 28;
studentCopy.address.houseNum = 10
console.log("After the Change:");
console.log("Original Student: ", student1);
console.log("Copy Student: ", studentCopy);


function copyObj(Object){
    if( Object === null || typeof Object !== "object"){
        return Object;
    }else{
        let objectCopy = JSON.parse(JSON.stringify(Object));
        return objectCopy;
    }
}

// Deep Copy using Recursion
function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  const copy = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}

