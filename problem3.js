function fizzBuzz(num){
    if(num % 3 === 0 && num % 5 === 0){
        console.log("FizzBuzz");
    } else if (num % 3 === 0) {
        console.log("Fizz");
    } else if (num % 5 === 0){
        console.log("Buzz");
    } else{ return String(num);
    }
}
console.log(fizzBuzz(3)); // "Fizz"
console.log(fizzBuzz(5)); // "Buzz"
console.log(fizzBuzz(15)); // "FizzBuzz"
console.log(fizzBuzz(7)); // "7"