const numbers = [4, -4, 10, 203, 53, 11];
const minimumValue = numbers.reduce((min, current) => {
    return current < min ? current : min;

});
console.log(minimumValue);