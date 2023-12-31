{
  class Animal {};

  class Cat extends Animal{
    isCat: boolean = true;
  }
  class Dog extends Animal{
    isDog: boolean = true;
  }

  const animalsWithDog = [ new Cat(), new Cat(), new Dog()];
  const animalsWithoutDog = [ new Cat(), new Cat(), new Cat()];
  const animals = [ new Dog(), new Dog(), new Dog()];

  function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isCat !== undefined;
  }

  console.log(animalsWithDog.every<Cat>(isCat));
  console.log(animalsWithoutDog.every<Cat>(isCat));
}