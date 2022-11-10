// class Point {
//   constructor (x, y) {
//     this.x = x
//     this.y = y
//   }

//   printXY () {
//     console.log(`X: ${this.x}, Y: ${this.y}`)
//   }

//   static distance (p1, p2) {
//     const dx = p1.x - p2.x
//     const dy = p1.y - p2.y

//     return Math.hypot(dx, dy)
//   }

//   static name = 'POINT'
// }

// const p1 = new Point(5, 5)
// p1.printXY()
// const p2 = new Point(10, 10)
// p2.printXY()
// // p2.distance() // wrong

// console.log(Point.distance(p1, p2))
// // console.log(Point.printXY()) // wrong
// console.log(Point.name)
// console.log(Point.x) // wrong

// class Person {
//   city = 'Tehran'

//   constructor (name, family, age) {
//     this.name = name
//     this.family = family
//     this.age = age
//   }

//   getFullName () {
//     return `${this.name} ${this.family}`
//   }
// }

// const persons = [
//   ['Firooze', 'Dabaghi'],
//   ['Zahra', 'Mousavi']
// ].map(el => new Person(...el))

// console.log(persons)

// const p1 = new Person('Ali', 'Mousavi', 33)

// console.log(p1)

// console.log(p1.getFullName())

// const p2 = new Person('Fatemeh', 'Sadegh', 23)

// console.log(p2.getFullName())

// function timeout (time, value) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(value)
//     }, time * 1000)
//   })
// }

// async function func () {
//   console.log('a')

//   const data = await timeout(1, 'ali')
//   console.log(data)

//   console.log('b')

//   const data2 = await timeout(2, 'eli')
//   console.log(data2)

//   console.log('c')

//   return 'Anisa'
// }

// func().then(console.log)
// await func() // wrong

// function prom (value) {
//   return new Promise(resolve => {
//     resolve(value ** 2)
//   })
// }

// async function prom (value) {
//   return value ** 2
// }

// prom(10).then(value => console.log(value))

// function request (url, method = 'GET') {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest()

//     xhr.open(method, url)
//     xhr.send()

//     xhr.onload = function () {
//       if (xhr.status >= 400) {
//         reject('There is an error')
//       } else {
//         resolve({
//           status: xhr.status,
//           text: xhr.response,
//           json: () => {
//             return new Promise((resolve, reject) => {
//               try {
//                 resolve(JSON.parse(xhr.response))
//               } catch (err) {
//                 reject(err)
//               }
//             })
//           }
//         })
//       }
//     }

//     xhr.onerror = function () {
//       reject('There is an error')
//     }
//   })
// }

// // request('https://jsonplaceholder.ir')
// fetch('https://jsonplaceholder.ir/users/1')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err))
//   .finally(() => console.log('Request ended'))

// function prom (time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(time)
//       if (time) {
//         return resolve(time ** 2)
//       } else {
//         return reject(new Error('Time is zero'))
//       }
//     }, time * 1000)
//   })
// }

// prom(0)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
//   .finally(() => console.log('Finally 1'))

// prom(1)
//   .then(result => {
//     console.log(result)
//     return 'Ali'
//   })
//   .then(name => console.log(name))
//   .catch(error => console.log(error))
//   .finally(() => console.log('Finally 2'))

// prom(2)

// setTimeout(() => {
//   console.log('1')
// }, 1000)

// setTimeout(() => {
//   console.log('2')
// }, 2000)

// setTimeout(() => {
//   console.log('3')
// }, 3000)

// setTimeout(() => {
//   console.log('4')
// }, 4000)
