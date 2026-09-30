//JavaScript Fundamentals - Part 1
//Values and Variables
let country = 'Moldova';
let continent = 'Europe';
let population = 2.37;

console.log(country);
console.log(continent);
console.log(population);

//Data Types
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//Basic Operation
let halfPopulation = population / 2;
console.log(
    `Each half of ${country} would have ${halfPopulation} million people.`,
);

let incrementPopulation = ++population;
console.log(incrementPopulation);

let decrementPopulation = --population;
console.log(decrementPopulation);

if (population > 6) {
    console.log(`${country} has more people than Finland`);
} else {
    console.log(`${country} has fewer people than Finland`);
}

if (population < 33) {
    console.log(`${country} has less people than average country`);
} else {
    console.log(`${country} has more people than average country`);
}

let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

//Equality Operators: == vs. ===
let numNeighbours = prompt(
  'How many neighbour countries does your country have?',
);
if (numNeighbours === 1) {
  console.log('Only 1 border!');
} else if (numNeighbours > 1) {
  console.log('More than 1 border!');
} else {
  console.log('Noborders');
}

numNeighbours = Number(numNeighbours);

//6. When we use prompt(), JS receives the input as a string, even if we enter a number. So if we enter 1, the value is "1", not 1
//With the === operator, JS checks both value and type. In case, "1" is a string and 1 is a number, so "1" === 1 returns false. That's why the if block is not executed.

//7. Number() converts the string received from prompt() into a number, allowing === to work as expected.

//8. We should use === operator because it checks both the value and the type, which makes the comparison more predictable and avoids unexpected type conversion.
//Since prompt() always return a string, we should convert the input into a number using Number(). Then we can compare the number with === correctly.

//Logical Operators
if (language === 'English' && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}

//Strings and Template Literals
let descriptionTemplateLiterals = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(descriptionTemplateLiterals);

//Type Conversion and Coercion

//a. '9' - '5' = 4
//b. '19' - '13' + '17' = 617
//c. '19' - '13' + 17 = 23
//d. '123' < 57 = false
// e. 5 + 6 + '4' + 9 - 4 - 2 = 1143; 5 + 6 = 11; 11 + '4' = '114'; '114' + 9 = '1149'; '1149' - 4 = 1145;  1145 - 2 = 1143

// if / else Statements
if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(
        `${country}'s population is ${33 - population} million below average.`,
    );
}

//The switch Statement
switch (language) {
    case 'Chinese':
    case 'Mandarin':
        console.log(`MOST number of native speakers!`);
        break;

    case 'Spanish':
        console.log(`2nd place in number of native speakers`);
        break;

    case 'English':
        console.log(`3rd place`);
        break;

    case 'Hindi':
        console.log(`Number 4`);
        break;

    case 'Arabic':
        console.log(`5th most spoken language`);
        break;

    default:
        console.log('Great language too :D');
        break;
}