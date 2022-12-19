// JavaScript model of a simple Classification for Kingdom Animalia.

class Animal {
    constructor(animalClass) {
      this.animal = animalClass;
    }
  
    // Properties
    withBackbone() {
      console.log('This animal has a backbone');
    }
  
    withoutBackbone() {
      console.log('This animal does not have a backbone');
    }
  
    coldBlooded() {
      console.log('This animal is cold blooded');
    }
  
    warmBlooded() {
      console.log('This animal is warm blooded');
    }
  }
  
  //classes
  class Anthropoda extends Animal {
    constructor(animal) {
      super(animal);
    }
  
    describe() {
      this.withoutBackbone();
      this.coldBlooded();
    }
  }

  class Fish extends Animal {
    constructor(animal) {
      super(animal);
    }
  
    describe() {
      this.withBackbone();
      this.coldBlooded();
    }
  }

  class Amphibia extends Animal {
    constructor(animal) {
      super(animal);
    }
  
    describe() {
      this.withBackbone();
      this.coldBlooded();
    }
  }

  class Reptiles extends Animal {
    constructor(animal) {
      super(animal);
    }
  
    describe() {
      this.withBackbone();
      this.coldBlooded();
    }
  }

  class AVES extends Animal {
    constructor(animal) {
      super(animal);
    }
  
    describe() {
      this.withBackbone();
      this.warmBlooded();
    }
  }

  class Mammals extends Animal {
    constructor(animal) {
      super(animal);
    }
  
    describe() {
      this.withoutBackbone();
      this.warmBlooded();
    }
  }


  const insects = new Anthropoda('anthropoda');
  insects.describe();

  const aquaticAnimals = new Fish ('fish');
  aquaticAnimals.describe();

  const crawlingAnimals = new Amphibia ('amphibia');
  crawlingAnimals.describe();
  
  const reptiles = new Reptiles ('reptiles');
  reptiles.describe();

  const flyingAnimals = new AVES ('aves');
  flyingAnimals.describe();

  const catFamily = new Mammals ('mammals');
  catFamily.describe();
 
  