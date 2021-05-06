// write a function that returns an array of numbers between a starting point and an ending point

const arrayMaker = (start, end) =>
{
    let result = [];
    for (let i = start; i <= end; i++)
    {
        result.push(i);
    }
    return result;
}

//console.log(arrayMaker(4, 17));

// write a function that returns a random number between a low and a high number

const rando = (low, high) =>
{
    // check to see if the low is lower than the high...
    if (low >= high)
    {
        // low is not lower than high, so how do we handle it?
        console.error('Any message I want.');
        throw new Error(`First argument must be lower than 2nd argument.`);
    }

    return Math.floor(Math.random() * (high - low +1)) + low;
}

//console.log(rando(3, 7));
let randomArray = [];
for (let i = 0; i < 100; i++)
{
    randomArray.push(rando(3, 7));
}
//console.log('randomArray: ', randomArray);


// write a function that will reverse a string

const reverse = (str) =>
{
    
    if (typeof str !== 'string')
    {
        throw new Error('Argument must be a string.');
    }

    let result = '';

    //let charArray = str.split('');

    for (let i = str.length - 1; i >= 0; i--)
    {
        // result = result + str[1];
        result += str[i];
    }

   return result;
}

console.log(reverse('Brian'));


const revReduce = (str) =>
{
    const holder = str.split('');


    return holder.reduce((acc, char) =>
    {
        return char + acc;
    }, '');
}

console.log(revReduce('Brian'));

// Write a function takes a "Range" object, and returns an array that matches
// Range object looks like: {lb: 0, ub: 7, li: true; ui: false}
// lb: lower bound, ub: upper bound, li: lower bound is inclusive in range?, ui: upper bound is inclusive in range?
// [0, 1, 2, 3, 4, 5, 6]

const rangeToArray = (range) =>
{
    // javascript allows you to destructure objects and arrays
    // destructuring allows you to pull out a specific property of an object and make it a variable (or constant)

    // for example
    const {lb, ub, li, ui} = range;
    let result = [];
    // now i have a constant named lb that has the same value as range.lb

    let start = li ? lb : lb + 1;

    /*
    let start;
    if (li === true)
    {
        start = lb;
    }
    else
    {
        start = lb + 1;
    }
    */

    let end = ui ? ub : ub - 1;

    for (; start <= end; start++)
    {
        result.push(start);
    }

    return result;// some kind of array
}

// to test
const result = rangeToArray({lb: 9, ub: 7, li: false, ui: false});

//console.log(result);

const xrangeToArray = (range) =>
{
    let {lb, ub, li, ui} = range;
    results = [];

    if (li) lb++;
    if (ui) ub++;
    
    for (; lb < ub; lb++) results.push(lb);

    return results;
}

console.log('My array: ', xrangeToArray({lb: 0, ub: 5, li: true, ui: true}));


// react component examples
// functional component
/*
const MyComponent = (props) =>
{
    return (<div>Whatever</div>);
}
*/
// JavaScript Classes

// parking garage example

class ParkingGarage {
    constructor(props)
    {
        this.capacity = props.capacity;
        this.parkedCars = [];
    }

    parkCar = (car) =>
    {
        let index = this.parkedCars.length;
        if (this.parkedCars.length < this.capacity)
        {
            this.parkedCars.push(car);
        }
        return index;
    }
    removeCar = (carIndex) =>
    {
        return this.parkedCars.splice(carIndex, 1)[0];
    }
}

const testGarage = new ParkingGarage({capacity: 5});
let teslaspot = testGarage.parkCar('Tesla');
testGarage.parkCar('Ford Fiesta');
testGarage.parkCar('Bus');
console.log(testGarage.removeCar(teslaspot));
console.log(testGarage);

