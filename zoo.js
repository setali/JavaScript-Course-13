class Animal {
  constructor (type) {
    this.type = type
  }

  eat () {
    console.log('HUM HUM')
  }
}

class Cat extends Animal {
  constructor (name) {
    super('CAT')
    this.name = name
  }

  speak () {
    console.log('MU MU')
  }

  eat () {
    super.eat()
    console.log('CHUM CHUM')
  }
}

class PersianCat extends Cat {
  constructor (name, color) {
    super(name)
    this.color = color
  }

  speak () {
    console.log('Myav Myav')
  }

  sleep () {
    console.log('Khor pof')
  }
}

const pangool = new PersianCat('Pangool', 'white')

console.log(pangool)

// console.log(pangool instanceof PersianCat)
// console.log(pangool instanceof Cat)
// console.log(pangool instanceof Animal)
// console.log(pangool instanceof Object)

// console.log(pangool)
// console.log(pangool.color)
// console.log(pangool.type)
// pangool.speak()
// pangool.eat()
// pangool.sleep()

// const cat = new Cat('Pishi')

// console.log(cat)
// cat.eat()
// cat.speak()

// const animal = new Animal('CAT')

// console.log(animal)
// animal.eat()
