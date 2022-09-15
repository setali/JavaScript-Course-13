// AC12FA   => i => undefined => 0 => 1 => 2 => 3 => 4 => 5

// console.log(1)

// setTimeout(function () {
//   console.log(2 + 2)
// }, 0)

// console.log(2)

// function func () {
//   var i
//   for (i = 0; i < 5; i++) {
//     setInterval(function () {
//       console.log(i)
//     }, 1000)
//   }
// }

// func()

// var counter = 1

// var intervalId
// setTimeout(function () {
//   intervalId = setInterval(function () {
//     console.log(counter++)
//   }, 1000)

//   console.log(intervalId)
// }, 2000)

// setTimeout(function () {
//   clearInterval(intervalId)
// }, 10000)

// var counter = 1

// setInterval(function () {
//   console.log(counter++)
// }, 1000)

// console.log('a')
// setTimeout(function () {
//   console.log(1)
// }, 2000)

// console.log('b')
// setTimeout(function () {
//   console.log(2)
// }, 2000)

// console.log('c')
// setTimeout(function () {
//   console.log(3)
// }, 2000)

// console.log('d')

// function counter () {
//   var value = 0

//   function increase () {
//     console.log(++value)
//   }

//   function decrease () {
//     console.log(--value)
//   }

//   return { increase, decrease }
// }

// var myCounter = counter()

// console.log(myCounter)

// var myCounter1 = counter()

// console.log(myCounter1)

// console.log(myCounter === myCounter1)

// function func (a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c
//     }
//   }
// }

// var func10 = func(10)

// console.log(func10(40)(50))

// var func30 = func10(20)

// console.log(func30(60))
// console.log(func30(40))
// console.log(func30(10))

// var func50 = func10(40)

// console.log(func50(80))

// var result = func(10)(20)(30)

// console.log(result)

// console.log(a)

// var a = 20

// console.log(a)

// func()

// function func () {
//   var a
//   console.log(a)

//   a = 10

//   console.log(a)
// }

// var c = 90

// function func1 () {
//   var a = 10

//   function func2 () {
//     var a = 50
//     var b = 30
//     console.log('a:', a)
//     console.log('c:', c)
//     window.d = 100
//   }

//   function func3 () {
//     console.log(a)
//     // console.log('b', b)
//     console.log(d)
//     f = 200
//   }

//   console.log('1', a)
//   func2()
//   console.log(d)

//   console.log('2', a)
//   func3()
//   console.log(f)
// }

// func1()
