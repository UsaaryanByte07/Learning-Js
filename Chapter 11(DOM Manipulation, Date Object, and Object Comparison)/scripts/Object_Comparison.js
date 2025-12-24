// ==========================================
// PART 1: OBJECT COMPARISON FUNCTIONS
// ==========================================

/**
 * Feature: Extremely fast and simple way to compare objects by converting them to strings.
 * Drawback: Fails if property order is different; ignores non-JSON data like functions or undefined.
 */
function jsonEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

/**
 * Feature: Compares top-level properties directly; more reliable than JSON for simple objects.
 * Drawback: Cannot "see" inside nested objects; it only compares references for inner objects.
 */
function shallowEqual(obj1, obj2) {
  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

/**
 * Feature: Perfectly compares nested objects of any depth by using recursion.
 * Drawback: Computationally expensive (slow) for very large objects; can cause stack overflow if objects are circular.
 */
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true; // Same reference or both null
  }

  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false; // Different number of properties
  }

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
}

// ==========================================
// PART 2: DEMONSTRATION WITH STUDENT OBJECTS
// ==========================================

console.log("=== OBJECT COMPARISON DEMONSTRATIONS ===\n");

// Test 1: jsonEqual() - Same content, same order
console.log("--- TEST 1: jsonEqual() with same property order ---");
const student1 = { name: "Alice", age: 20, grade: "A" };
const student2 = { name: "Alice", age: 20, grade: "A" };
console.log("student1:", student1);
console.log("student2:", student2);
console.log("jsonEqual(student1, student2):", jsonEqual(student1, student2)); // true
console.log();

// Test 2: jsonEqual() - Same content, different order (FAILS)
console.log("--- TEST 2: jsonEqual() with different property order ---");
const student3 = { name: "Bob", age: 21, grade: "B" };
const student4 = { grade: "B", name: "Bob", age: 21 }; // Different order
console.log("student3:", student3);
console.log("student4:", student4);
console.log("jsonEqual(student3, student4):", jsonEqual(student3, student4)); // false (order matters!)
console.log();

// Test 3: jsonEqual() with functions (FAILS - functions are ignored)
console.log("--- TEST 3: jsonEqual() with functions ---");
const student5 = {
  name: "Charlie",
  age: 22,
  greet: function () {
    return "Hi!";
  },
};
const student6 = { name: "Charlie", age: 22 };
console.log("student5:", student5);
console.log("student6:", student6);
console.log("jsonEqual(student5, student6):", jsonEqual(student5, student6)); // true (function is ignored!)
console.log();

// Test 4: shallowEqual() - Works for simple objects
console.log("--- TEST 4: shallowEqual() with simple objects ---");
const student7 = { name: "Diana", age: 23, grade: "A" };
const student8 = { name: "Diana", age: 23, grade: "A" };
console.log("student7:", student7);
console.log("student8:", student8);
console.log(
  "shallowEqual(student7, student8):",
  shallowEqual(student7, student8)
); // true
console.log();

// Test 5: shallowEqual() - FAILS for nested objects
console.log("--- TEST 5: shallowEqual() with nested objects (FAILS) ---");
const student9 = {
  name: "Eve",
  age: 24,
  address: { city: "New York", zip: "10001" },
};
const student10 = {
  name: "Eve",
  age: 24,
  address: { city: "New York", zip: "10001" },
};
console.log("student9:", student9);
console.log("student10:", student10);
console.log(
  "shallowEqual(student9, student10):",
  shallowEqual(student9, student10)
); // false (nested object reference differs)
console.log();

// Test 6: deepEqual() - SUCCEEDS for nested objects
console.log("--- TEST 6: deepEqual() with nested objects (SUCCEEDS) ---");
const student11 = {
  name: "Frank",
  age: 25,
  address: { city: "Boston", zip: "02101" },
  courses: ["Math", "Physics"],
};
const student12 = {
  name: "Frank",
  age: 25,
  address: { city: "Boston", zip: "02101" },
  courses: ["Math", "Physics"],
};
console.log("student11:", student11);
console.log("student12:", student12);
console.log(
  "deepEqual(student11, student12):",
  deepEqual(student11, student12)
); // true
console.log();

// Test 7: deepEqual() - Detects differences in nested objects
console.log("--- TEST 7: deepEqual() detects nested differences ---");
const student13 = {
  name: "Grace",
  age: 26,
  address: { city: "Chicago", zip: "60601" },
};
const student14 = {
  name: "Grace",
  age: 26,
  address: { city: "Chicago", zip: "60602" }, // Different zip
};
console.log("student13:", student13);
console.log("student14:", student14);
console.log(
  "deepEqual(student13, student14):",
  deepEqual(student13, student14)
); // false
console.log();

// Test 8: All three functions with different values
console.log("--- TEST 8: Different students (all should return false) ---");
const student15 = { name: "Henry", age: 27, grade: "C" };
const student16 = { name: "Ivy", age: 28, grade: "B" };
console.log("student15:", student15);
console.log("student16:", student16);
console.log(
  "jsonEqual(student15, student16):",
  jsonEqual(student15, student16)
); // false
console.log(
  "shallowEqual(student15, student16):",
  shallowEqual(student15, student16)
); // false
console.log(
  "deepEqual(student15, student16):",
  deepEqual(student15, student16)
); // false
console.log();

// Test 9: Comparing deeply nested objects
console.log("--- TEST 9: Deeply nested objects ---");
const student17 = {
  name: "Jack",
  details: {
    personal: { age: 29, gender: "M" },
    academic: { gpa: 3.8, courses: ["AI", "ML"] },
  },
};
const student18 = {
  name: "Jack",
  details: {
    personal: { age: 29, gender: "M" },
    academic: { gpa: 3.8, courses: ["AI", "ML"] },
  },
};
console.log("student17:", student17);
console.log("student18:", student18);
console.log(
  "jsonEqual(student17, student18):",
  jsonEqual(student17, student18)
); // true
console.log(
  "shallowEqual(student17, student18):",
  shallowEqual(student17, student18)
); // false (nested)
console.log(
  "deepEqual(student17, student18):",
  deepEqual(student17, student18)
); // true
console.log();

console.log("=== END OF DEMONSTRATIONS ===");
