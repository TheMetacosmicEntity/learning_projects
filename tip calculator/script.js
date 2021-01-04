let RestaurantRating = parseFloat(prompt("Please rate your experience at this restaurant out of 5:"));
let WaiterRating = parseFloat(prompt("Kindly rate the waiter's service out of 5:"));
let MealAmount = parseFloat(prompt("How much was your meal?"));

let tipCalculator = (waiter, restaurant, meal) => {
    let base;
    if(restaurant <= 3) {
        base = (waiter/20) * meal;
    }
    else {
        base = 1.5 * ( (waiter/20) * meal );
    }

    let mealTotal = base + meal;
    let totals = [base, mealTotal]
    return totals;
}

let MealTotal = tipCalculator(WaiterRating, RestaurantRating, MealAmount);

//console.log(MealTotal[0] + " " + MealTotal[1]);
alert(`Your base tip should be ${MealTotal[0]}. Please feel free to add more. With the base tip, your bill total should be ${MealTotal[1]}`);