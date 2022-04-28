"use strict";
const n1 = 7;
const n2 = '5';
function sum(a, b) {
    if (typeof a !== 'number') {
        a = +a;
    }
    if (typeof b !== 'number') {
        b = +b;
    }
    return a + b;
}
const r1 = sum(n1, n2);
const r2 = sum(n2, n1);
console.log(r1);
console.log(r2);
const marks = [10, 2, 8, 4];
function average(list) {
    let suma = 0;
    const kiekis = list.length;
    for (let i = 0; i < kiekis; i++) {
        suma += list[i];
    }
    return suma / kiekis;
}
const v1 = average(marks);
console.log(v1);
const petras = ['Petras', 99, true];
const maryte = ['Maryte', 87, false];
const jonas = ['Jonas', 88, false];
const ona = ['Ona', 69, true];
function aboutPerson(person) {
    return `${person[0]} is ${person[1]} old and is ${person[2] ? '' : 'not '}married.`;
}
console.log(aboutPerson(petras));
console.log(aboutPerson(maryte));
console.log(aboutPerson(jonas));
console.log(aboutPerson(ona));
var colors;
(function (colors) {
    colors["blue"] = "blue";
    colors["black"] = "black";
    colors["red"] = "red";
})(colors || (colors = {}));
;
var foods;
(function (foods) {
    foods["banana"] = "banana";
    foods["potato"] = "potato";
})(foods || (foods = {}));
const chuck = {
    name: 'Chuck',
    color: colors.black,
    age: 70,
    food: foods.banana
};
const prime = {
    name: 'Optimus Prime',
    color: colors.red,
    food: foods.potato
};
function heroSais(h) {
    return `${h.name}${h.age ? ` (${h.age}y)` : ''} has ${h.color} belt`;
}
console.log(heroSais(chuck));
console.log(heroSais(prime));
console.log(chuck);
console.log(prime);
var httpMethods;
(function (httpMethods) {
    httpMethods[httpMethods["success"] = 200] = "success";
    httpMethods[httpMethods["error"] = 400] = "error";
    httpMethods[httpMethods["serverError"] = 500] = "serverError";
})(httpMethods || (httpMethods = {}));
const h1 = httpMethods.success;
console.log(h1);
const input = 'rgtrhnjackijurhdgnjdkoisrudjkfsd';
// const letters: {[key: string]: number} = {}
const letters = {};
for (const letter of input) {
    if (letters[letter]) {
        letters[letter]++;
    }
    else {
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
