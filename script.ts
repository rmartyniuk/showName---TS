function showMyName(name) {
    console.log(name)
  }
  
  showMyName('John')
  
  function square(a) {
    return a * a
  }
  
  square(10)
  
  function sum(title, ...numbers) {
    return title + ' = ' + numbers.reduce((sum, num) => sum + num, 0)
  }
  
  sum('Numbers', 1, 6, 10)
  
  const executeFunc = func => {
    const title = 'Lorem Ipsum'
    func(title, 24, ['Sport', 'Movies'])
  }
  
  executeFunc((title, age, hobbies) => { return true })