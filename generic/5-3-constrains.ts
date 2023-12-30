{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log("full time");
    }

    workFullTime(){

    }
  }
  class PartTimeEmployee implements Employee {
    pay() {
      console.log("part time");
    }

    workFPartTime(){

    }
  }
 // 세부적인 타입을 인자로 받아서 추상적인 타입을 리턴하는 함수는 좋지 않다. 
  function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
  }

  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }

  const kang = new FullTimeEmployee();
  const bob = new PartTimeEmployee();

  kang.workFullTime();
  bob.workFPartTime();

  // 더이상 full, part 함수 사용 불가
  const dongAfterPay = pay(kang);
  const bobAfterPay = pay(bob);

  const obj = {
    name: "kang",
    age: 20,
  }

  function getValue<T, K extends keyof T>(obj: T, key: K): T[K]{
    return obj[key];
  }

  console.log(getValue(obj, "name"));

}