// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below

let scoreDolphins = [96, 108, 89];

let scoreKoalas = [88, 91, 110];

let averageDolphins = scoreDolphins.reduce((x, y) => x+y) / scoreDolphins.length;
console.log(averageDolphins);

// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
let averageKoalas = scoreKoalas.reduce((x,y) => x + y) / scoreKoalas.length;
averageDolphins > averageKoalas ? console.log(`Dolphins win (${averageDolphins} vs. ${averageKoalas})`) : console.log(`Koalas win (${averageKoalas} vs. ${averageDolphins})`);
    
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. 
// Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 

if(averageDolphins > averageKoalas && averageDolphins >= 100 ){
    console.log("Dolphins win")
}else if(averageKoalas > averageDolphins && averageKoalas >= 100){
    console.log("Koalas win")
}




// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens whenSS
// both teams have the same score and both have a score greater or equal 100 points.
//  Otherwise, no team wins the trophy

if(averageDolphins === averageKoalas && averageDolphins >= 100 && averageKoalas >= 100){
    console.log("Draw")
}else{
    console.log("No team wins the trophy")
}

