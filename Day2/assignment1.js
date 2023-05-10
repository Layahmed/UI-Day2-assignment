const arrMax = (numbers) => {
    let largestNumber =numbers[0];

    numbers.forEach((number) => {
        if(number > largestNumber){
            largestNumber =number;
        }
    });

    return largestNumber;
};

const numbersArray = [5,8,9,6,10,15];
const largestNumber = arrMax(numbersArray);
console.log(largestNumber);