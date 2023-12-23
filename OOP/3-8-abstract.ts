{
  type CoffeeCup={
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;  // class level
    private coffeeBeans: number = 0;           // instance level
    
    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine{
      return new CoffeeMachine(coffeeBeans);
    }

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
  
  class CheapMilkSteamer {
    private steamMilk():void {
      console.log("Steaming some milk");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup{
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true
      }
    }
  }

  class automaticSugarMixer {
    private getSugar() {
      console.log("Getting some sugar from candy");
    }
    addSugar(cup: CoffeeCup): CoffeeCup{
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: true
      }
    }
  }

  class CaffeLatteMachine extends CoffeeMachine{
    constructor(beans: number, public readonly serialNumber: string, private milkFother: CheapMilkSteamer){
      super(beans)
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkFother.makeMilk(coffee);
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine{
    constructor(private beans:number, private sugar: automaticSugarMixer) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
        const coffee = super.makeCoffee(shots);
        return this.sugar.addSugar(coffee);
    }
  }

  class SweetCaffeLatteMachine extends CoffeeMachine{
    constructor(
      private beans:number, 
      private sugar: automaticSugarMixer,
      private milkFother: CheapMilkSteamer
    ){
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
        const coffee = super.makeCoffee(shots);
        const sugarAdded = this.sugar.addSugar(coffee);
        return this.milkFother.makeMilk(sugarAdded);
    }
  }
}