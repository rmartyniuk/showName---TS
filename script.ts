function showMyName(name: string) {
  console.log(name)
}

showMyName('John')

//dlaczego również poza nawiasem należało wpisać  ": number"???
function square(a: number): number {
  return a * a
}

square(10)

function sum(
  this: any,
  title: string,
  ...numbers: number[]
) {
  return (title +
    ' = ' +
    numbers.reduce(
      (sum: number,
        num: number): number =>
        sum + num,
      0
    )
  );
}

sum('Numbers', 1, 6, 10)

const executeFunc = (
  func: (
    title: string,
    age: number,
    hobbies: string[]
  ) => boolean
) => {
  const title = 'Lorem ipsum';
  const age = 24;
  const hobbies = ['sport', 'Movies'];
  return func(title, age, hobbies);
};

executeFunc((title, age, hobbies) => {
  return true;
});