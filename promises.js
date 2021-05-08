function myCallback(item)
{
    console.log('this: ', this);
    return item.name;
}

const arrowCallback = (item) =>
{
    console.log('this: ', this);
    return item.name;
}

const employees = [
    {
        name: 'Brian',
        jobTitle: 'Teacher',
    },
    {
        name: 'Bob',
        jobTitle: 'Student',
    },
    {
        name: 'Alice',
        jobTitle: 'Student',
    },
];


const employeeNames = employees.map((item) =>
{
    return item.name;
});

console.log(employeeNames);

//myCallback({name: 'Test'});

//arrowCallback({name: 'Test'});

// executing code in a sequence

const testArray = [];



const addItem = (item, callback) =>
{
    setTimeout(() =>
    {
        testArray.push(item);
        callback();
    }, 2);
}

addItem('Brian', () =>
{
    console.log('Test array: ', testArray);
});


console.log('This should be last: ', testArray);


const myPromise = (item) =>
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            testArray.push(item);
            resolve(33);
        }, 2000);
    });
}

myPromise('Brian')
.then((result) =>
{
    console.log('result: ', result);

    console.log(testArray);
})
