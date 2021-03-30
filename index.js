// Write your solution here!

let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    drivers.push(name)
};

function destructivelyPrependDriver(name){
    drivers.unshift(name)
};

function destructivelyRemoveLastDriver(name) {
    drivers.pop(name)
};

function destructivelyRemoveFirstDriver(name) {
    drivers.shift(name)
};

function appendDriver(name) {

    const newDriver = [...drivers.slice(0, 3), name];
    
    return newDriver
};

function prependDriver(name) {
    const newDriver = [...drivers.slice(0, 0), name, ...drivers.slice(0)];
    return newDriver
};


function removeLastDriver() {
    let newDriver = drivers.slice( 0, drivers.length -1);
    return newDriver
};

function removeFirstDriver() {
    let newDriver = drivers.slice(1);
    return newDriver
};
