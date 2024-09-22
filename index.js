function numberMultiples () {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  const entryIsInteger = (number) => {
    return Number.isInteger(Number(number))
  }
  const multiples = (num) => {
    const mulitplesList = []
    for (let i = 1; i <= 100; i++) {
      if (i % num === 0) {
        mulitplesList.push(i)
      }
    }
    return mulitplesList
  }
  try {
    readline.question('Input a number: ', num => {
      if (entryIsInteger(num) === true && num > 0 && num <= 100) {
        const response = multiples(num)
        console.log(`The multiples are: ${response}`)
        readline.close()
      } else {
        console.log('The entry is not a positive integer or not is between 1 to 100')
        readline.close()
      }
    })
  } catch (error) {
    console.log(error)
  }
}
numberMultiples()
