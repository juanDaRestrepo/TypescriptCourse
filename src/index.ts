
//basic types
let myTypeString: string = "I am a string";
let myTypeNumber: number = 33;
let myTypeBoolean: boolean = true;

//Array 
let arrNumber : number[] = [1,2,3];
//Otra forma de declarar arrays
//let arrNumber2 : Array<number> = [2,4,5];

//tuple
let tuplePlayers :[string,number,boolean] =['julio',2,false];

//tuple array
let players: [number, string][];

players = [
    [1,"julio"],
    [1,"computer"]
]

//union types this varible could be of those tree types

let myVariable3: string|number|null;