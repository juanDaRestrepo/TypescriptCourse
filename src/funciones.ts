function greet (name: string = 'User') {
    console.log(`Hello, ${name} !!`);
}

greet();


function getNumber(): number{
    return Math.floor(Math.random() *100)
}

console.log(getNumber());

function printPosition(position: {lat: number, long: number | string}): void{
    console.log(`Latitude & longitude are: LAT ${position.lat} LOG ${position.long}`);
}

printPosition({lat: 3, long:4})


