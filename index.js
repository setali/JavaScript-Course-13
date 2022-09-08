// function factorial (n) {
//   return n === 1 ? 1 : n * factorial(n - 1)
// }

// function factorial (n) {
//   var result = 1
//   while (n) {
//     result *= n--
//   }

//   return result
// }
// function factorial (n) {
//   var result = 1
//   for (var i = n; i > 0; i--) {
//     result *= i
//   }

//   return result
// }

// console.log(factorial(10493))

// 5! = 5 * 4!
// 4! = 4 * 3!
// 3! = 3 * 2!
// 2! = 2 * 1!
// 1! = 1

// 5! = 5 * 4 * 3 * 2 * 1
// 4! = 4 * 3 * 2 * 1
// 3! = 3 * 2 * 1
// 2! = 2 * 1
// 1! = 1

// var arr = [
//   2,
//   7,
//   'ali',
//   function (a, b) {
//     return a / b
//   }
// ]

// function sum (a, b) {
//   return a + b
// }

// function sub (a, b) {
//   return a - b
// }

// function noop () {}

// function operate (a, b, cb = noop) {
//   console.log(a, b, cb, typeof cb)
//   return cb(a, b)
// }

// console.log(operate(3, 5, sum))
// console.log(operate(30, 5, sub))
// console.log(operate(30, 5, arr[3]))
// console.log(
//   operate(3, 5, function (a, b) {
//     return a * b
//   })
// )

// console.log(operate(1, 2))

// console.log(sum(3, 5))
// console.log(sub(30, 5))
// console.log(arr[3](20, 5))

// function sum (a = 10, b = 5, c = 0, d = 0, e = 0) {
//   console.log('length', arguments.length)

//   var result = 0

//   for (var number of arguments) {
//     result += number
//   }

//   return result
// }

// console.log(sum(4, 7, 6))
// console.log(sum(4, 7))
// console.log(sum())
// console.log(sum(4, 6, 3, 1))
// console.log(sum(4, 6, 3, 1, 8))

// var sum = function (a, b) {
//   return a + b
// }

// console.log(sum(2, 5))

// function func () {
//   for (var i = 0; i < 10; i++) {
//     if (i === 5) {
//       return
//     }
//     console.log(i)
//   }
//   console.log('Out for')
// }

// console.log(func())

// function logHello () {
//   console.log('hello')
// }

// logHello()
// logHello()
// logHello()
// logHello()

// function sum (a, b) {
//   //   console.log(a + b)
//   return a + b
// }

// var r = sum(2, 5)

// console.log(r)

// console.log(r + 5)

// var person = {
//   firstName: 'Ali',
//   lastName: 'Mousavi',
//   family: {
//     father: 'Mohammad',
//     mother: 'Hajar'
//   },
//   age: 33,
//   city: 'Shiraz',
//   eye: 'brown',
//   hair: 'brown'
// }

// for (var key in person) {
//   console.log(key, '=>', person[key])
// }

// console.log('firstName' in person)
// console.log('name' in person)

// for (var el of person) { // wrong
//   console.log(el)
// }

// var friends = ['Ali', 'Eli', 'Qoli', 'Fati', 'Zari']

// for (var i = 0; i < friends.length; i++) {
//   console.log(i, friends[i])
// }

// for (var friend of friends) {
//   console.log(friend)
// }

// for (var i = 0; i < friends.length; i++) {
//   console.log(i, friends[i])
// }

// for (var friend of friends) {
//   console.log(friend)
// }

// var str = 'salam'

// for (var el of str) {
//   console.log(el)
// }

// for (var i = 0; i < 10; i++) {
//   if (i === 5) {
//     break
//   }

//   console.log(i)
// }
// for (var i = 0; i < 10; i++) {
//   if (i % 3 === 0) {
//     continue
//   }

//   console.log(i)
// }

// var i = 15

// do {
//   console.log('salam', i)
//   i++
// } while (i < 10)

// console.log(i)

// var n = 5

// var result = 1

// // for (var i = n; i > 0; i--) {
// //   result *= i
// // }

// while (n) {
//   result *= n--
// }

// console.log(result)

// var result = 0

// for (var i = 0; i <= 10; i++) {
//   result = result + i
// }

// console.log(result)

// for (var i = 0; i < 100; i = i + 5) {
//   console.log('salam', i)
// }

// var j = 0
// while (j < 5) {
//   console.log('salam')
//   j++
// }
