{
  type CoffeeCup={
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;  // class level
    private coffeeBeans: number = 0;           // instance level
    
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine{
      return new CoffeeMachine(coffeeBeans);
    }

    // private coffeebeans에 직접 접근 X 
    // 메서드를 통해 증가
    fillCoffeeBeans(beans: number){
      if(beans < 0){
        throw new Error("Value for beans should be greate than zero");
      }
      this.coffeeBeans += beans;
    }

    clean(){
      console.log("Cleaning the machine..");
    }

    private grindBeans(shots: number){
      console.log(`grinding beans for ${shots}`);
      if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT){
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void{
      console.log("Heating up,,,");
    }

    private extract(shots: number): CoffeeCup{
      console.log(`Pulling ${shots} shits,,,`);
      return {
        shots,
        hasMilk: false
      }
    }

    makeCoffee(shots: number): CoffeeCup{
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }
  // const maker = new CoffeeMaker(32);  

  // const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
  // maker2.clean();

  class Amateur {
    constructor(private machine: CoffeeMaker){}

    makeCoffee(){
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }
  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker){}
    makeCoffee(){
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  const maker = CoffeeMachine.makeMachine(32);
  const amateur = new Amateur(maker);
  const pro = new ProBarista(maker);

  amateur.makeCoffee();
  pro.makeCoffee();
}