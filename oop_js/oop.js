class Animal {
   constructor(name, age, isMammal) {
      this.name = name;
      this.age = age;
      this.isMammal = isMammal;
   }

}

class Rabit extends Animal {
   function eat(name) {
      `${this.name} sedang makan!`
   }
}

const rabit = new Rabit()
