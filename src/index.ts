const n1:number = 7;
const n2:string = '5';

function sum(a:number|string, b:number|string):number {
    if (typeof a !== 'number') {
        a = +a;
    }
    if (typeof b !== 'number') {
        b = +b;
    }
    return a + b;
}

const r1:number = sum(n1, n2);
const r2:number = sum(n2, n1);
console.log(r1);
console.log(r2);

const marks:number[] = [10, 2, 8, 4];

function average(list:number[]):number {
    let suma:number = 0;
    const kiekis:number = list.length;

    for (let i=0; i<kiekis; i++) {
        suma += list[i];
    }

    return suma / kiekis;
}

const v1 = average(marks);
console.log(v1);

type person = [string, number, boolean];

const petras:person = ['Petras', 99, true];
const maryte:person = ['Maryte', 87, false];
const jonas:person = ['Jonas', 88, false];
const ona:person = ['Ona', 69, true];

function aboutPerson(person:person): string {
    return `${person[0]} is ${person[1]} old and is ${person[2] ? '' : 'not '}married.`
}

console.log(aboutPerson(petras));
console.log(aboutPerson(maryte));
console.log(aboutPerson(jonas));
console.log(aboutPerson(ona));

enum colors {
    blue = 'blue', 
    black = 'black', 
    red = 'red'
};

enum foods {
    banana = 'banana',
    potato = 'potato'
}

interface hero { 
    name: string, 
    color: colors,
    age?: number,
    food?: foods
}

const chuck:hero  = {
    name: 'Chuck',
    color: colors.black,
    age: 70,
    food: foods.banana
}

const prime: hero = {
    name: 'Optimus Prime',
    color: colors.red,
    food: foods.potato
}

function heroSais(h:hero):string {
    return `${h.name}${h.age ? ` (${h.age}y)` : ''} has ${h.color} belt`;
}

console.log(heroSais(chuck));
console.log(heroSais(prime));

console.log(chuck);
console.log(prime);

enum httpMethods {
    success = 200,
    error = 400,
    serverError = 500,
}

const h1:httpMethods = httpMethods.success;
console.log(h1);


const input: string = 'rgtrhnjackijurhdgnjdkoisrudjkfsd';

// const letters: {[key: string]: number} = {}
const letters: Record<string, number> = {}

for (const letter of input) {
    if (letters[letter]) {
        letters[letter]++;
    } else {
        letters[letter] = 1;
    }
}

console.log(letters);


function isValidName() {

}

console.log(isValidName(1));
console.log(isValidName(true));
console.log(isValidName(''));
console.log(isValidName('jonas'));
console.log(isValidName('jONas'));
console.log(isValidName('Jonas'));

// [true, 'Klaidos pranesimas']
// [false, 'OK']