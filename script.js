"use strict";
function showMyName(name) {
    console.log(name);
}
showMyName('John');
function square(a) {
    return a * a;
}
square(10);
function sum(title, ...numbers) {
    return (title + ' = ' + numbers.reduce((sum, num) => sum + num, 0));
}
sum('Numbers', 1, 6, 10);
const executeFunc = (func) => {
    const title = 'Lorem ipsum';
    const age = 24;
    const hobbies = ['sport', 'Movies'];
    func(title, age, hobbies);
};
executeFunc((title, age, hobbies) => {
    return true;
});
