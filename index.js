// function setCookie (name, value, time, path = '/') {
//   var date = new Date()
//   date.setSeconds(date.getSeconds() + time)

//   document.cookie =
//     name + '=' + value + ';expires=' + date.toUTCString() + ';path=' + path
// }

// // setCookie('name', 'Ali', 10000)
// // setCookie('family', 'Mousavi', 10000)

// function getCookies () {
//   return Object.fromEntries(
//     document.cookie.split(';').map(function (el) {
//       return el.trim().split('=')
//     })
//   )
// }

// function getCookie (name) {
//   return getCookies()[name]
// }

// function removeCookie (name) {
//   setCookie(name, '', 0)
// }

// removeCookie('name')

// console.log(getCookie('age'))

// console.log(getCookies())

// function handleClick (event) {
//   console.log('salam')
//   console.log(event.target)
//   event.target.textContent = 'Ali Mousavi'
// }

// var h2 = document.querySelector('h2')
// h2.addEventListener('click', handleClick)

// function handleMouse () {
//   console.log('Mouse over')
//   h2.style.color = 'red'
//   h2.removeEventListener('click', handleClick)
// }

// var a = document.querySelector('a')
// a.addEventListener('mouseover', handleMouse)
