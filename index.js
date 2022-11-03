const iterable1 = new Number(128)

iterable1[Symbol.iterator] = function * () {
  yield 1
  yield 2
  yield 3
}

for (const el of iterable1) {
  console.log(el)
}

console.log(iterable1 + 2)

// const person = {
//   name: 'Ali',
//   family: 'Mousavi',
//   age: 33,
//   [Symbol.toPrimitive]: function (hint) {
//     if (hint === 'string') {
//       return `${this.name} ${this.family}`
//     }

//     if (hint === 'number') {
//       return this.age
//     }
//   }
// }

// console.log(+person)
// console.log(String(person))

// const sym1 = Symbol.for('ali')
// const sym2 = Symbol.for('ali')

// console.log(sym1 === sym2)

// const sym = Symbol('My symbol')

// console.log(sym)

// const person = {
//   name: 'Ali',
//   [sym]: 'Qoli'
// }

// // console.log(person[sym])

// for (let key in person) {
//   console.log(key)
// }

// console.log(JSON.stringify(person))

// const sym1 = Symbol()

// console.log(sym1)

// const sym2 = Symbol()

// console.log(sym2)

// console.log(sym1 === sym2)

// function slideshow (slides) {
//   console.log(slides)

//   if (!Array.isArray(slides)) {
//     const error = Error('Slides must be an array')

//     // console.log(error.message)
//     // console.log(error.stack)
//     // console.log(error.name)
//     throw error
//   }

//   /// code

//   console.log('salam')
// }

// const person = {
//   firstName: 'Ali',
//   lastName: 'Mousavi',
//   family: {
//     father: 'Mohammad'
//   },
//   age: 33,
//   city: 'Tehran'
// }

// // const name = person.firstName
// // const lastName = person.lastName
// // const fatherName = person.family.father

// const {
//   firstName: name,
//   lastName,
//   gender = 'male',
//   family: { father: fatherName },
//   ...otherProps
// } = person

// console.log(gender)
// console.log(name)
// console.log(lastName)
// console.log(fatherName)

// console.log(otherProps)
// function func (a, ...args) {
//   return args.sort()
// }

// console.log(func(2, 5, 7, 3))

// const sum = (...args) => args.reduce((acc, el) => acc + el)

// console.log(sum(2, 3, 7))

// const numbers = [4, 8, 1, 3, 9, 5]

// console.log(Math.max.apply(null, numbers))

// console.log(Math.max(...numbers))
// console.log(Math.max(4, 8, 1, 3, 9, 5))

// const arr = [4, 5, 6]

// const arr2 = [1, 2, 3, ...arr, 7, 8, 9]

// console.log(arr2)

// const obj1 = {
//   name: 'Ali',
//   family: 'Mousavi',
//   age: 22
// }

// const obj2 = {
//   age: 33,
//   gender: true
// }

// // const obj3 = Object.assign({}, obj1, obj2)

// const obj3 = { ...obj1, ...obj2, friends: ['Qoli'] }

// console.log(obj3)

// function func () {
//   return {
//     name: 'Ali',
//     normalFunc: function () {
//       console.log(this)
//     },
//     arrowFunc: () => console.log(this)
//   }
// }

// const qoli = {
//   name: 'Qoli'
// }

// const obj = func.call(qoli)

// const newObj = {
//   name: 'Fati',
//   normalFunc: obj.normalFunc,
//   arrowFunc: obj.arrowFunc
// }

// newObj.normalFunc()
// newObj.arrowFunc()

// obj.normalFunc()
// obj.arrowFunc()

// const arr = [2, 4, 6, 8]

// // const newArr = arr.map(function (el) {
// //   return el ** 2
// // })
// const newArr = arr.map(el => el ** 2)

// console.log(newArr)

// const sum = (a, b) => a + b

// const pow2 = a => a ** 2

// console.log(pow2(5))
// console.log(sum(2, 5))

// const firstName = 'Ali',
//   city = 'shiraz'

// // const str = 'My name is ' + firstName + "\nI'm living in " + city
// const str = `My name is ${firstName}
// I'm living in ${city}`

// console.log(str)

// const friends = ['Ali', 'Eli']

// friends.push('Fati')

// friends[2] = 'Qoli'

// friends = ['Ali', 'Eli', 'Qoli'] // Wrong

// console.log(friends)

// // 12ACBD
// const obj = {
//   name: 'Ali'
// }

// // obj.name = 'Qoli'

// // AC14BF
// obj = {  wrong
//   name: 'Qoli'
// }

// console.log(obj)

// const a = 10

// a = 20

// console.log(a)

// var x
// let x = 10

// {
//   x = 2
// }

// console.log(x)

// function func1 () {
//   let name2 = 'Hasan'
//   {
//     var name1 = 'Ali'
//     let name2 = 'Qoli'
//     console.log(name2)
//   }

//   console.log(name1)
//   console.log(name2)
// }

// func1()

// console.log(firstName)

// let firstName = 'Ali'

// console.log(firstName)

// console.log(firstName)

// var firstName = 'Ali'

// console.log(firstName)
