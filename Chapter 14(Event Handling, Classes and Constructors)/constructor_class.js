//Old Method
function Student(Name,age,gender,city,state,course){
    this.Name = Name;
    this.age = age;
    this.gender = gender;
    this.course = course;
    this.address = {
        city: city,
        state: state,
    }

    this.printName = function() {
        console.log(this.Name)
    }
}

let student1 = new Student("Aryan",23,"Male","Bandra","Maharasthra","CSE");
console.log(student1);
student1.printName();
console.log(student1.address);

Student.prototype.isStudent = true;
let student2 = new Student("Heena",23,"Female","Kochi","kerala","Civil Engg");
console.log(student1.isStudent); 
console.log(student2.isStudent);

//New method
class Employee{
    constructor(firstName, secondName, gender, age, department){
        this.Name = {
            firstName,
            secondName,
        };
        this.gender = gender;
        this.age = age;
        this.department = department;
    }

    getEmployeeDepartment(){
        return this.department;
    }
}

let emp1 = new Employee("Rupesh","Bhatia", "male", 22, "Finance");
console.log(emp1);
console.log(emp1.getEmployeeDepartment());
