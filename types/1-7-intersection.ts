{
  /**
   * Intersection Types: &
   */

  type Student = {
    name : string;
    score : number;
  }

  type Worker = {
    employed: number;
    work: ()=>void;
  }

  function interWork(person: Student & Worker){
    console.log(person.name, person.employed, person.work());
  }

  interWork({
     employed:1,
     name:"",
     score:1,
     work: ()=>{}
  })
}