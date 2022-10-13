// var person = {
//   name: 'Ali',
//   family: 'Mousavi'
// }

// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log('name' in person)

// var entries = Object.entries(person)

// console.log(entries)

// var obj = Object.fromEntries(entries)

// console.log(obj)

// var obj = {
//   name: 'Hasan',
//   getFullName () {
//     return this.name + ' ' + this.family
//   }
// }

// Object.defineProperty(obj, 'family', {
//   value: 'Mousavi',
//   writable: true,
//   configurable: false,
//   enumerable: false
// })

// console.log(obj)

// Object.defineProperty(obj, 'fullName', {
//   get: function () {
//     return this.name + ' ' + this.family
//   },
//   set: function (value) {
//     var arr = value.split(' ')
//     this.name = arr[0]
//     this.family = arr[1]
//   }
// })

// console.log(obj.fullName)

// obj.fullName = 'Maria Sarshar'

// console.log(obj.name)
// console.log(obj.family)

// console.log(Object.getOwnPropertyDescriptor(obj, 'name'))
// console.log(Object.getOwnPropertyDescriptor(obj, 'family'))

// console.log(obj.fullName)

// obj.family = 'Hasani'
// delete obj.family

// console.log(obj)

// for (var key in obj) {
//   console.log(key, obj[key])
// }

// console.log(JSON.stringify(obj))
// console.log(obj.family)

// var obj = Object.create(null)

// console.log(obj)

// // #ACB142
// var person = {
//   name: 'Ali',
//   age: 33,
//   gender: true,
//   partner: undefined,
//   birthday: new Date(),
//   obj: {},
//   getFullName () {
//     // var obj = {}
//     return 'Ali Mousavi'
//   },
//   symbol: Symbol()
// }

// console.log(person)

// var jsonPerson = JSON.stringify(person)

// console.log(jsonPerson)
// // console.log(typeof jsonPerson)

// var newPerson = JSON.parse(jsonPerson)

// console.log(newPerson)
// console.log(typeof newPerson)

// console.log(person === newPerson)

// #14BAC2
// var obj1 = {
//   a: 10,
//   // #20AB42
//   b: {
//     c: 20
//   }
// }

// // var obj3 = {
// //   d: 40,
// //   a: 80
// // }

// // Shallow clone
// // var obj2 = {}
// // Object.assign(obj2, obj1)

// var obj2 = Object.assign({}, obj1)

// // Deep clone
// // var obj2 = JSON.parse(JSON.stringify(obj1))

// // var obj2 = obj1

// obj2.a = 50
// obj2.b.c = 100

// console.log(obj1)
// console.log(obj2)

// console.log(obj1 === obj2)
// console.log(obj1.b === obj2.b)

// function Func () {}

// var obj = new Func()

// console.log(obj)

// var obj = {}
// console.log(obj)
