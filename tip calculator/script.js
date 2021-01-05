/*let RestaurantRating = parseFloat(prompt("Please rate your experience at this restaurant out of 5:"));
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
*/
let TipCalculator = class {
    constructor() {
        
        //Properties needed for tip calculator object
        this.waiterRating;
        this.restaurantRating;
        this.mealValue;

        //Method for calculating tip
        const calculateTip = () => {
            let base = parseFloat(); 

            if(this.waiterRating <= 3) {
                base = (this.waiterRating/20) * this.mealValue;
            }
            else {
                base = ((this.waiterRating/20) + (this.restaurantRating/40)) * this.mealValue;
            }

            return base;
        }

        let mealTotal = calculateTip() + this.mealValue;

        let billMessage = `Your base tip is ${calculateTip()}, feel free to add more.`;
        billMessage += `Your total bill with the base tip will be ${mealTotal}`;
    }

}

let dinnerTip = new TipCalculator;

dinnerTip.waiterRating = parseFloat( prompt("Please rate your waiter from 1 to 5") );
dinnerTip.restaurantRating = parseFloat( prompt("Please rate the restaurant from 1 to 5") );
dinnerTip.mealValue = parseFloat( prompt("How much did your meal cost?") );

console.log(dinnerTip.billMessage);