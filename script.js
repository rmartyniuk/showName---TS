function showMyName(name) {
    console.log(name);
}
showMyName('John');
//dlaczego również poza nawiasem należało wpisać  ": number"???
function square(a) {
    return a * a;
}
square(10);
function sum(title) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    return (title +
        ' = ' +
        numbers.reduce(function (sum, num) {
            return sum + num;
        }, 0));
}
sum('Numbers', 1, 6, 10);
var executeFunc = function (func) {
    var title = 'Lorem ipsum';
    var age = 24;
    var hobbies = ['sport', 'Movies'];
    return func(title, age, hobbies);
};
executeFunc(function (title, age, hobbies) {
    return true;
});
