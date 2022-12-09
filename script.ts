function showMyName(name: string): void {
  console.log(name)
}
showMyName('John')


function square(a: number): number {
  return a * a;
}
square(10)


function sum(title: string, ...numbers: number[]
) {
  return (title + ' = ' +
    numbers.reduce((sum: number, num: number
    ): number => sum + num, 0
    )
  );
}
sum('Numbers', 1, 6, 10)


const executeFunc = (func: (
  title: string,
  age: number,
  hobbies: string[]
) => boolean) => {
  const title: string = 'Lorem ipsum';
  const age: number = 24;
  const hobbies: string[] = ['sport', 'Movies'];
  func(title, age, hobbies)
}
executeFunc((title, age, hobbies) => {
  return true;
})