{
  const obj = {
    name: 'ellie',
  };
  obj.name;
  obj['name'];

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  }

  type Name = Animal['name']; // string
  const text: Name = 'hello';

  type Gender = Animal['gender'];

  type keys = keyof Animal;
  const key:keys = 'age';

  type Person = {
    name: string;
    gender: Animal['gender'];
  }

  const person:Person = {
    name: "hello",
    gender: "male"
  }
}
