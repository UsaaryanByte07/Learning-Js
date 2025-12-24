let student1 = {
    firstName: "Aryan",
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
    },
};

console.log(getName(student1));

function getName(argStudent){
    // let firstName = argStudent.firstName;
    // let secondName = argStudent.surname;
    let {firstName, surname} = argStudent;



    return firstName + " " + surname;
}

// Property shorthand
let price = 861;
let product = {
  company: 'Mango',
  itemName: 'Cotton striped t-shirt',
  price: price
};

// is same as
let product1 = {
  company: 'Mango',
  itemName: 'Cotton striped t-shirt',
  price
};

// Method shorthand
let product2 = {
  company: 'Mango',
  itemName: 'Cotton striped t-shirt',
  displayPrice: function() {
    return `$$ {this.price.toFixed(2)}`;
  }
};

// is same as
let product3 = {
  company: 'Mango',
  itemName: 'Cotton striped t-shirt',
  displayPrice() {
    return `$$ {this.price.toFixed(2)}`;
  }
};