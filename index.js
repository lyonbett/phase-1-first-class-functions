const returnFirstTwoDrivers = (drivers)=>{
    const newArr = []
    let l1 = `${drivers[0]}`
    let l2 = `${drivers[1]}`
    newArr.push(l1)
    newArr.push(l2)
    return newArr
}
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

// Returns an array of the last two drivers
const returnLastTwoDrivers = (drivers)=>{
    const newArr = []
    let l1 = `${drivers[2]}`
    let l2 = `${drivers[3]}`
    newArr.push(l1)
    newArr.push(l2)
    return newArr
}
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

// Allows to output either function from the array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//* Returns a function and multiplies a given value
const createFareMultiplier = function (fareMultiplier) {
    return function(cost) {return fareMultiplier * cost;
      }
}
// A function doubles fares
const fareDoubler = createFareMultiplier(2);
// a function tripples fares
const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(drivers, drive) {
  return drive(drivers);
}
// Receives a function and calls it 
function receivesAFunction(spy){ 
    spy() 
} 
 
// "Before all" hook 
function returnsANamedFunction(){ 
    return function fn(){} 
} 
function returnsAnAnonymousFunction(){ 
    return ()=>{} 
}