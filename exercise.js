var person = {
  firstName: 'Ali',
  lastName: 'Mousavi',
  age: 33,
  family: {
    father: 'Mohammad',
    mother: 'Hajar'
  },
  friends: ['Ali', 'Eli', 'Qoli', 'Fati']
}

/////////////////// 7

function printFriends (friends) {
  for (var friend of friends) {
    console.log(friend)
  }
}

// printFriends(person.friends)

///////////////// 8

function getFullName (obj) {
  return obj.firstName + ' ' + obj.lastName
}

console.log(getFullName(person))

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
