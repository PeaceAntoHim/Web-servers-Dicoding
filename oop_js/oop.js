class Animal {
   constructor(name, age, isMammal) {
      this.name = name;
      this.age = age;
      this.isMammal = isMammal;
   }

}

class Rabbit extends Animal {
   eat() {
      return `${this.name} sedang makan!` 
   }
}

class Eagle extends Animal {
   fly() {
      return `${this.name} sedang terbang!`
   }
}

const myRabbit = new Rabbit()
myRabbit.name = 'Labi'
myRabbit.age = 2
myRabbit.isMammal = true

const myEagle = new Eagle()
myEagle.name = 'Elo'
myEagle.age = 4
myEagle.isMammal = false


