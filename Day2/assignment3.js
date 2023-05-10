const sumEvens = (numbers) => {
    let sum = 0;
    for (const number of numbers){
        if(number % 2 === 0) {
sum += number;
        }
    }
    return sum;
};

const numbers = [1,2,3,4,5,6,7,8,9,10];
const result = sumEvens(numbers);

console.log(result);