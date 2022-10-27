///////// 13

// function power (a, b) {
//   var result = a

//   for (var i = 1; i < b; i++) {
//     result *= a
//   }

//   return result
// }

// 2 ^ 4 => 2 * 2 ^ 3
// 2 ^ 3 => 2 * 2 ^ 2
// 2 ^ 2 => 2 * 2 ^ 1
// 2 ^ 1 => 2

// power(a, b) => a * power(a, b -1)

function power (a, b) {
  return b === 1 ? a : a * power(a, b - 1)
}

console.log(power(5, 3))

////////// 11

function callbackOperation (callback) {
  var numbers = []

  for (var i = 1; i < arguments.length; i++) {
    numbers[i - 1] = arguments[i]
  }

  return callback.apply(null, numbers)
}

// console.log(callbackOperation(subtraction, 20, 2, 5))

///////// 10

function operation (operator) {
  var numbers = []

  for (var i = 1; i < arguments.length; i++) {
    numbers[i - 1] = arguments[i]
  }

  switch (operator) {
    case 'sum':
      return sum.apply(null, numbers)

    case 'sub':
      return subtraction.apply(null, numbers)

    case 'mul':
      return multiply.apply(null, numbers)

    case 'div':
      return division.apply(null, numbers)
  }
}

// console.log(operation('sub', 20, 2, 5))

//////// 9

function sum () {
  var result = 0

  for (var number of arguments) {
    result += number
  }

  return result
}

function subtraction (result) {
  // var result = arguments[0]

  for (var i = 1; i < arguments.length; i++) {
    result -= arguments[i]
  }

  return result
}

function multiply () {
  var result = 1

  for (var number of arguments) {
    result *= number
  }

  return result
}

function division (result) {
  for (var i = 1; i < arguments.length; i++) {
    result /= arguments[i]
  }

  return result
}

// console.log(sum(20, 2, 5))
// console.log(subtraction(20, 2, 5))
// console.log(multiply(20, 2, 5))
// console.log(division(20, 2, 5))

// var person = {
//   firstName: 'Ali',
//   lastName: 'Mousavi',
//   age: 33,
//   family: {
//     father: 'Mohammad',
//     mother: 'Hajar'
//   },
//   friends: ['Ali', 'Eli', 'Qoli', 'Fati']
// }

// /////////////////// 7

// function printFriends (friends) {
//   for (var friend of friends) {
//     console.log(friend)
//   }
// }

// // printFriends(person.friends)

// ///////////////// 8

// function getFullName (obj) {
//   return obj.firstName + ' ' + obj.lastName
// }

// console.log(getFullName(person))

////////////////// 1

// var firstName = 'Ali',
//   lastName = 'Mousavi',
//   age = 33,
//   city = 'Shiraz'

// console.log(
//   'My name is ' +
//     firstName +
//     ' ' +
//     lastName +
//     '\n\t => I have ' +
//     age +
//     " years old.\n\t => I'm living in " +
//     city
// )
