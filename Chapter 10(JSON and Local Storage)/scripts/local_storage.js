let studentMarks = {
    "Aryan": 34,
    "Sameer": 45,
    "Kuldeep": 90,
    "Nishant": 23,
}

let pi = 3.14;
let city = "Mumbai";

localStorage.setItem("student_marks",studentMarks);
localStorage.setItem("PI_value",pi);
localStorage.setItem("city",city);
localStorage.setItem("grades",["A", "B", "C", "D"]);

let grades = localStorage.getItem("grades");

localStorage.removeItem("grades");
console.log("Removed Item Grades: ", localStorage.getItem("grades"))

localStorage.clear();