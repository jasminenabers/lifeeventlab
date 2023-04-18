"use strict"

let name = "Jasmine Nabers";
let age = 27;
const birthday = "January 19";
let pineapplePizza = "true"
const lifeEvent = [
     "I was born in Roanoke",
"I went to OCC", 
"I  was double promoted",
"I love food",
];
lifeEvent[3] = "I have been to Japan";

if(pineapplePizza) {
    console.log("My name is " + name + " and I like pinapples on pizza. I am currently" + 
    age +
    "years old and my birthday is on" +
     birthday +
    "."
    );
} else {
    console.log(
        `My name is ${name} and I like pinnaples on my pizza. I m currently ${age} years old and my birthday is on ${birthday}`
    );
}

 
 for(let octopus = 0; octopus < lifeEvent.length;octopus = octopus += 1 )  {
    console.log(lifeEvent [octopus]);
 } 

let counter = 0;
while(true) {
    const randomNumber = Math.floor( Math.random() * 10 +1);
    console.log(randomNumber);
    if (randomNumber !== 5) {
        counter++;
        console.log(randomNumber + "!== 5");
    } else {
        counter++;
        console.log(
            `5 === 5. It took {$counter} iterations to randomly generate the number 5`
        );
        break;
    }
}

//ext. challenge 
let hours  = 20;
let wage = 10;
let basePay = 0;
let overtimePay = 0;
if (hours > 40) {
    let extraHours = hours - 40;
    console.log(extraHours);
    overtimePay = extraHours * wage * 1.5;
    console.log(overtimePay);
    basePay = wage * 40;
} else {
    // if hours <= 40:
    basePay = wage * hours;
}

console.log(`total paycheck: $${basePay + overtimePay} per week`);