function showMyName(name: string): string {
  console.log(name)
  return name
}
showMyName('John')

function square(a: number): number {
  return a * a
}
square(10)

function sum(
  title: string,
  ...numbers: number[]
): string | number {
  return (title +
    ' = ' +
    numbers.reduce(
      (sum: number,
        num: number
      ): number =>
        sum + num, 0
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
}

executeFunc((title, age, hobbies) => {
  return true;
});