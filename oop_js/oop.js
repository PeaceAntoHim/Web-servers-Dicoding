class Animal {
   constructor() {
      this.name = "";
      this.age = 0;
      this.isMammal = false;
   }

}

class Rabit extends Animal {
   function eat(name) {
      return `${this.name} sedang makan!`
   }
}

const rabit = new Rabit()
