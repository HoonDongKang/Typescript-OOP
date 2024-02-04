{
  type Animal = {
  name: string;
  age: number;
  gender: 'male' | 'female'
}

type Name = Animal['name'];

const text: Name = 'hello';

type Gender = Animal['gender'];

type Keys = keyof Animal;

}