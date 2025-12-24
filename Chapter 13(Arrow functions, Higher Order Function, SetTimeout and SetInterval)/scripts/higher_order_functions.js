const createDouble = () => {
    return num => num*2;
}

const twice = createDouble();
console.log(twice(10));

console.log(createDouble()(2));