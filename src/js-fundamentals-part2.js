//Functions
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const description1 = describeCountry('Japan', 122.3, 'Tokyo');
const description2 = describeCountry('Finland', 5.63, 'Helsinki');
const description3 = describeCountry('France', 69.1, 'Paris');
console.log({description1, description2, description3});

//Function Declarations vs. Expression

//Function Declaration
function percentageOfWorld1(population) {
    let worldPopulation = 7900;
    return ((population / worldPopulation) * 100).toFixed(1);
}

const percentageChina1 = percentageOfWorld1(1441);
const percentageIndia1 = percentageOfWorld1(1400);
const percentageUSA1 = percentageOfWorld1(340);
console.log({percentageChina1, percentageIndia1, percentageUSA1});

//Function Expression
const percentageOfWorld2 = function (population) {
    let worldPopulation = 7900;
    return ((population / worldPopulation) * 100).toFixed(1);
};
const percentageChina2 = percentageOfWorld2(1441);
const percentageIndia2 = percentageOfWorld2(1400);
const percentageUSA2 = percentageOfWorld2(340);
console.log({percentageChina2, percentageIndia2, percentageUSA2});

//Arrow Function
const percentageOfWorld3 = (population) => ((population / 7900) * 100).toFixed(1);
const percentageChina3 = percentageOfWorld3(1441);
const percentageIndia3 = percentageOfWorld3(1400);
const percentageUSA3 = percentageOfWorld3(340);
console.log({percentageChina3, percentageIndia3, percentageUSA3});

//Function Calling Other Functions
function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
}

const descriptionChina = describePopulation('China', 1441);
const descriptionIndia = describePopulation('India', 1400);
const descriptionUSA = describePopulation('USA', 340);
console.log({descriptionChina, descriptionIndia, descriptionUSA});

//Introduction to Array
let populations = [2.5, 68, 125, 1441];
console.log(populations.length === 4);

let percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);

//Basic Array Operations (Methods)
let neighbours = ['Belgium', 'Romania', 'Ukraine'];
neighbours.push('Utopia');
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D.');
}

const index = neighbours.indexOf('Belgium');
neighbours[index] = 'Kingdom of Belgium';
console.log(neighbours);

//Iteration: The for Loop
for (let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting`);
}

//Looping Arrays, Breaking and Continuing
let percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}
console.log({
    percentages2, percentages, areEqual:
        percentages2[0] === percentages[0] &&
        percentages2[1] === percentages[1] &&
        percentages2[2] === percentages[2] &&
        percentages2[3] === percentages[3],
});

//Looping Backwards and Loops in Loops
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Poland', 'Sweden', 'Ukraine'],];
for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    }
}

//LECTURE: The while Loop
let percentages3 = [];
let i = 0;
while (i < populations.length) {
    percentages3.push(percentageOfWorld1(populations[i]));
    i++;
}
console.log({
    percentages3, percentages, areEqual:
        percentages3[0] === percentages[0] &&
        percentages3[1] === percentages[1] &&
        percentages3[2] === percentages[2] &&
        percentages3[3] === percentages[3],
});

//Introduction to Objects
let myCountry = {
    country: 'Moldova', capital: 'Chisinau', language: 'Romanian', population: 2.37, neighbours: ['Romania', 'Ukraine'],

    //Object Methods
    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`,);
    }, //  Add a method called 'checkIsland' to the 'myCountry' object.
    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    },
};
console.log(myCountry);
myCountry.describe();
myCountry.checkIsland();

//Dot vs. Bracket Notation
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`,);
myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;
console.log(myCountry.population);