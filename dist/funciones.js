"use strict";
function greet(name = 'User') {
    console.log(`Hello, ${name} !!`);
}
greet();
function getNumber() {
    return Math.floor(Math.random() * 100);
}
console.log(getNumber());
function printPosition(position) {
    console.log(`Latitude & longitude are: LAT ${position.lat} LOG ${position.long}`);
}
printPosition({ lat: 3, long: 4 });
