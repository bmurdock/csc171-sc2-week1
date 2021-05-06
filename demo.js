// variables
var anything;

let somethingelse;
/*
    This is a block comment
    variable types

*/

// number
let myNumber = 0;

// string
let myName = "Brian";

// is this a string or number
let confusion = '0';

// type coercion 
confusion = Number(confusion);



// string template literal format
let template = `also a string`;

let possessive = "Brian's bike";
let otherPos = 'Brian\'s Bike';

let complex = `We went to ${myName}'s house and he


said, "Surprise!" when we got there.`;


let crazy = `Today is ${Date.now()}`;


// array
let testArray = [1, 2, 3, 4, 'test'];
let moreArray = ['cat', 'dog', 'apple', ...testArray];

let circular = [testArray, moreArray];

// what in the world is this line doing?
// ... is the spread operator
circular = [...circular, circular];

let otherWay = new Array();

// objects
let propertyName = "id";
let employee = {
    name: "Brian",
    id: 2903848234,
    favoriteColor: 'blue'
};

// functions
var color = 'black';
function thinking(color)
{
    console.log(`Your color is ${color}`)
    console.log(`Your name is ${myName}`);
}

function addNumbers(first, second)
{
    let returnValue = '';
    if (first > 7)
    {
        returnvalue = "Your first number is too large.";
    }
    else
    {
        returnValue = first + second;
    }

    return returnValue;

}

let arrowFunction = (arg1) =>
{
    console.log(arg1);
    return 10;
}

arrowFunction('asdf');

let result = addNumbers(8, 10);

console.log(`result: ${result}`);

// for loops

/* syntax
for ( declare some variables ;  check a condition ;  increment or change some variables )
*/

for (let i = 0; i <= 5; i = i + 1)
{
    console.log(`This is loop #${i}`)
}


// how do you see output in JavaScript
thinking('red');

thinking('blue');

console.log(color);



// advanced array methods

let baseArray = [1, 2, 3, 7234];

// map
// returns a brand new array with the same number of elements as the original array

let mapped = baseArray.map((val, ind, somesortofanarray) =>
{
    console.log('val: ', val);
    console.log('ind: ', ind);
    if (ind === 0)
    {
        console.log('somesortofanarray: ', somesortofanarray);
    }

    return val + 1;
});

console.log('mapped: ', mapped);

// filter

// reduce