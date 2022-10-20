// var n = parseInt('101', 2)

// console.log(n)
// console.log(typeof n)

// // var str = 'salam'

// console.log(str)
// console.log(str.length)

// str.length = 2

// console.log(str)
// console.log(str.length)

// var persons = [
//   { name: 'Milad', age: 31, gender: 'male' },
//   { name: 'Atefeh', age: 33, gender: 'female' },
//   { name: 'Maedeh', age: 24, gender: 'female' },
//   { name: 'Behrooz', age: 29, gender: 'male' },
//   { name: 'Arlen', age: 25, gender: 'male' }
// ]

// persons
//   .sort(function (a, b) {
//     return a.age - b.age
//   })
//   .reverse()

// console.log(persons)

// var arr = [4, 1, 31, 18, 2, 6, 35]

// arr.sort(function (a, b) {
//   return a - b
// })

// console.log(arr)

// var sumAges = persons.reduce(function (acc, el) {
//   return acc + el.age
// }, 0)

// var average = sumAges / persons.length

// console.log(sumAges)
// console.log(average)

// var arr = [4, 9, 7, 3, 1, 6]

// var result = arr.reduce(function (acc, el) {
//   console.log(acc, el)
//   return acc + el
// }, 10)

// var result = 0

// arr.forEach(function (el) {
//   result += el
// })

// for (var el of arr) {
//   result = result + el
// }

// console.log(result)

// persons.map(function (el) {
//   console.log(el.name)
// })

// var names = persons.map(function (el) {
//   return el.name
// })

// console.log(names)

// var arr = [1, 2, 3, 4, 5]

// var newArr = arr.map(function (el) {
//   return el ** 2
// })

// console.log(newArr)

// persons.forEach(function (el) {
//   console.log(el.name)
// })

// var friends = ['Ali', 'Eli', 'Qoli', 'Fati']

// friends.forEach(function (el) {
//   console.log(el)
// })

// for (var friend of friends) {
//   console.log(friend)
// }

// for (var i = 0; i < friends.length; i++) {
//   console.log(friends[i])
// }

// var men = persons.filter(function (el) {
//   return el.gender === 'male'
// })

// console.log(men)

// var women = persons.filter(function (el) {
//   return el.gender === 'female'
// })

// console.log(women)

// var olds = persons.filter(function (el) {
//   return el.age >= 30
// })

// var behrooz = persons.find(function (el) {
//   return el.name === 'Behrooz'
// })

// console.log(behrooz)

// var hasYoung = persons.some(function (el) {
//   return el.age < 20
// })

// console.log(hasYoung)

// var arr = [5, 7, 12, 36, 45, 11]

// var odds = arr.filter(function (el) {
//   return el % 2
// })

// var evens = arr.filter(function (el) {
//   return !(el % 2)
// })

// console.log(odds)
// console.log(evens)

// var arr = [1, 9, 3, 5, 11]

// var isOdds = arr.every(function (el) {
//   return el % 2
// })

// console.log(isOdds)

// var arr = [4, 6, 2, 0, 8, 20]

// var isEvens = arr.every(function (el, index, arr) {
//   return el % 2 === 0
//   //   if (el % 2 === 0) {
//   //     return true
//   //   } else {
//   //     return false
//   //   }
// })

// console.log(isEvens)

// var arr = Array.from({ length: 100 }).fill(true, 10, 20)
// console.log(arr)

// console.log(typeof [])
// console.log(Array.isArray([]))

// console.log(Array.from('ali'))

// var newArr = Array.from([1, 2, 3], function (el) {
//   console.log(el)
//   return el * 2
// })

// console.log(newArr)

// var newArr = Array.from({ length: 100 }, function (el, index) {
//   return index + 1
// })

// console.log(newArr)

// function * generator () {
//   yield 1
//   yield 2
//   yield 3
//   yield 4
// }

// var it = generator()

// console.log(it.next())
// // console.log(it.next())
// // console.log(it.next())
// // console.log(it.next())
// // console.log(it.next())

// for (var el of it) {
//   console.log(el)
// }

// var arr = ['ali', 10, true]
// console.log(arr.toString())

// var arr1 = [10]

// console.log(arr1)
// console.log(arr1.length)

// var arr2 = new Array(10)

// console.log(arr2)
// console.log(arr2.length)

// var arr = ['ali', 10, true]
// var arr = new Array('ali', 10, true)

// console.log(arr)
// console.log(arr.length)

// arr.length = 2

// console.log(arr)
