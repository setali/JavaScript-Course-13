// var numbers = [4, 1, 9, 11, 2, 36, 7, 1]

// var result = Math.max.apply({}, numbers)

// console.log(result)

var firstName = 'Ali',
  lastName = 'Mousavi'

function getFullName (greeting = 'Hello', byeMessage = 'Goodby') {
  console.log(this)
  console.log(greeting + ' ' + this.firstName + ' ' + this.lastName)
  console.log(byeMessage + ' ' + this.firstName + ' ' + this.lastName)
}

var arlen = {
  firstName: 'Arlen',
  lastName: 'Saroyan'
}

// getFullName('salam', 'khadafez')

// getFullName.call(arlen, 'Hi', 'Bye')

var firoozeh = {
  firstName: 'Firoozeh',
  lastName: 'Dabaghi'
}

// getFullName.apply(firoozeh, ['Hi', 'Bye'])

getFullName = getFullName.bind(arlen)

console.log(getFullName)

getFullName()

// var obj1 = {
//   name: 'Pulsar',
//   bike: function () {
//     console.log(this.name)
//   }
// }

// var obj2 = { name: 'Gixxer', bike: obj1.bike }
// var name = 'Ninja'
// var bike = obj1.bike

// bike()
// obj1.bike()
// obj2.bike()

// var firstName = 'Fathemeh'
// var lastName = 'MoghadmNia'

// var ali = {
//   firstName: 'Ali',
//   lastName: 'Mousavi',
//   getFullName () {
//     console.log(this.firstName + ' ' + this.lastName)
//   }
// }

// var getFullName = ali.getFullName

// getFullName()

// var milad = {
//   firstName: 'Milad',
//   lastName: 'Ghajavand',
//   getFullName
// }

// var atefe = {
//   firstName: 'Atefe',
//   lastName: 'Sohrabi',
//   getFullName
// }

// ali.getFullName()

// milad.getFullName()

// atefe.getFullName()

// function Person () {
//   console.log(this === window)
// }

// Person()

// var ali = {
//   firstName: 'Ali',
//   lastName: 'Mousavi',
//   getFullName () {
//     console.log(this.firstName + ' ' + this.lastName)
//   }
// }

// var milad = {
//   firstName: 'Milad',
//   lastName: 'Ghajavand',
//   getFullName: ali.getFullName
// }

// var atefe = {
//   firstName: 'Atefe',
//   lastName: 'Sohrabi',
//   getFullName: milad.getFullName
// }

// ali.getFullName()

// milad.getFullName()

// atefe.getFullName()

// var person = {
//   firstName: 'Ali',
//   lastName: 'Mousavi',
//   getFullName: function () {
//     console.log(person === this)
//     return this.firstName + ' ' + this.lastName
//   },
//   family: {
//     father: 'Mohammad',
//     mother: 'Hajar',
//     func () {
//       console.log(this)
//     }
//   }
// }

// console.log(person.getFullName())

// person.family.func()

// var ali = {
//   firstName: 'Ali',
//   lastName: 'Mousavi',
//   fullName: 'Ali Mousavi',
//   age: 33
// }

// var zahra = {
//   firstName: 'Zahra',
//   lastName: 'Mousavi',
//   fullName: 'Zahra Mousavi',
//   age: 20
// }

// var samira = {
//   firstName: 'Samira',
//   lastName: 'Keshavarz',
//   fullName: 'Samira Keshavarz',
//   age: 33
// }

// function Person (name, family, age) {
//   this.firstName = name
//   this.family = family
//   this.fullName = this.firstName + ' ' + this.family
//   this.age = age
// }

// var ali = new Person('Ali', 'Mousavi', 33)
// var zahra = new Person('Zahra', 'Mousavi', 20)
// var samira = new Person('Samira', 'Keshavarz', 33)

// console.log(ali)
// console.log(zahra)
// console.log(samira)

// console.log(ali instanceof Person)
// console.log(110 instanceof Person)
// console.log(ali instanceof Array)
// console.log(zahra instanceof Person)
