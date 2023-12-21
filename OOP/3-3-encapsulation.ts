{
  type CoffeeCup={
    shots: number;
    hasMilk: boolean;
  };
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;  // class level
    private coffeeBeans: number = 0;           // instance level
    
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker{
      return new CoffeeMaker(coffeeBeans);
    }

    // private coffeebeans에 직접 접근 X 
    // 메서드를 통해 증가
    fillCoffeeBeans(beans: number){
      if(beans < 0){
        throw new Error("Value for beans should be greate than zero");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup{
      if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT){
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false
      }
    }
  }
  // const maker = new CoffeeMaker(32);  
  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(40);
  console.log(maker);
}