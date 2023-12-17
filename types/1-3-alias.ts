{
  /**
   * Type Aliases
   * 새로운 타입을 지정할 수 있다
   */
  type Text = string;
  const name: Text = "Kang";

  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: "Kang",
    age: 26
  }
  
  /**
   * String Literal Types
   */
  type Name = "name";
  let kangName: Name;
  // kangName = "kang";

  type JSON = "json";
  const json: JSON = "json";

  type Boal = true;
  const isCat: Boal = true;
}