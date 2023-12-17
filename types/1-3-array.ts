{
  //Array
  const fruits: string[] = [];
  const scores: number[] = [];
  const scores2: Array<number> = [];

  function printArray(fruits: readonly string[]){
    fruits.push()
  }

  //Tuple 지양 -> interface, type alias, class 대체 가능
  let student: [string, n umber];
  student = ["name", 123];
  student[0] // name
  student[1] // 123
  const [name, age] = student;
}