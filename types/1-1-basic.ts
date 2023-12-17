{
  /**
   * Javascript
   * Primitive: numbaer, string, boolean, bigint, symbol, null, undefined
   * Object: function, array, ...
   */

  //number
  const num:number = 4;

  //string
  const str:string = "hello";

  //boolean
  const boa:boolean = true;

  //undefined
  let name:undefined; // undefined 선언 X
  let age : number | undefined

  age= undefined;
  age= 3;

  //null
  let person: null; // null 선언 x
  let person2: string | null;

  //unknown => 최대한 사용 지양 - js 변환시 타입 추론할 수 없을 때
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  //any
  let anything: any = 0;
  anything = "hello";

  //void => 생략가능 
  function print(): void{
    console.log("hello");
    return;
  }

  //never - 리턴하지 않는 함수 
  function throwError(message: string): never{
    // message -> server (log)
    throw new Error(message);
  }

  // object - 원시타입을 제외한 모든 타입 / 지양
  let obj: object;
  function acceptSomeObject(obj: Object){}

  acceptSomeObject({ name: "kang"});
}