// Mark and John are trying to compare their BMI (Body Mass Index), 
// which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) 
// (mass in kg and height in meter).


// 1. Store Mark's and John's mass and height in variables


let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;


// 2. Calculate both their BMIs  

    // BMI Mark
    bmiMark = massMark / (heightMark * heightMark);
    // BMI John
bmiJohn = massJohn / (heightJohn * heightJohn);


// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

let markHigherBMI = bmiMark > bmiJohn;


console.log("Test1:   " , bmiMark, bmiJohn, markHigherBMI);





