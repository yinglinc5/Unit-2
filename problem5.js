function getShippingCost(weight, isMember){
    if(isMember === true){
        if(weight <= 5){
            console.log("Free");
        }
        else if(weight > 5){
            console.log("$3");
        }
    }
    else if(isMember === false){
        if(weight <= 1){
            console.log("$5");
        }
        if(weight <= 5){
            console.log("$8");
        }
        if(weight > 5){
            console.log("$12");
        }
    }
}

console.log(getShippingCost(3, true)); // 0
console.log(getShippingCost(8, true)); // 3
console.log(getShippingCost(0.5, false)); // 5
console.log(getShippingCost(4, false)); // 8
console.log(getShippingCost(10, false)); // 12