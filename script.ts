function showMyName(name: string) {
  console.log(name)
}

showMyName('John')

//dlaczego również poza nawiasem należało wpisać  ": number"???
//odpowiedź: w celu określenia typu zwracanych danych
function square(a: number): number {
  return a * a
}

square(10)

//this wskazuje na kontekst wykonywania funkcji. this nie zostanie potraktowane jako prawdziwy parametr funkcji ani nie zmieni kolejności paramterów. Więc właściwie w jakim celu go tu należy użyć?
function sum(
  this: any,
  title: string,

  //Czy "...numbers" oznacza wiele elementów typu liczbowego, które mają się znajdować w tablicy? Co oznaczają/na co wskazują te trzy kropeczki?
  ...numbers: number[]
) {
  return (title +
    ' = ' +
    numbers.reduce(
      (sum: number, num: number): number =>
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