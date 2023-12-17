{
  function jsAdd(num1, num2){
    return num1 + num2
  }

  function tsAdd(num1: number, num2: number): number{
    return num1 + num2
  }

  function jsFetchNum(id){
    return new Promise((resolve, reject)=>{
      resolve(100);
    })
  }

  function tsFetchNum(id: string): Promise<number>{
    return new Promise((resolve, reject)=>{
      resolve(100);
    })
  }

  // Javascript => Typescript
  // Optional parameter
  function printName(firstName:string, lastName?:string) {
    console.log(firstName);
    console.log(lastName);
  }

  printName("kang","donghoon");
  printName("kang");

  //Default parameter
  function printMessage(message: string = "default Message"){
    console.log(message);
  }

  printMessage(); // default Message

  //Rest parameter
  function addNumbers(...numbers: number[]): number{
    return numbers.reduce((a,b)=> a + b);
  }

  console.log(addNumbers(1, 2));
}