let RestaurantRating = parseFloat(prompt("Please rate your experience at this restaurant out of 5:"));
let WaiterRating = parseFloat(prompt("Kindly rate the waiter's service out of 5:"));
let MealAmount = parseFloat(prompt("How much was your meal?"));
let BaseTip;

if (RestaurantRating <= 3) {
    BaseTip = (WaiterRating/20) * MealAmount;
}
else {
    BaseTip = 1.5 * ((WaiterRating/20) * MealAmount);
}

let TotalBill = BaseTip + MealAmount;

alert(`Your base tip should be ${BaseTip}. Please feel free to add more. With the base tip, your bill total should be ${TotalBill}`);