{
  /**
 * Enum
 */
 //Javascript
 const MAX_NUM =6;
 const MAX_STUDENTS_PER_CLASS = 10;
 const MONDAY = 0;
 const TUESDAY = 1;
 const WEDNESDAY = 2;

 const DAYS_ENUM = Object.freeze({ "MONDAY": 0, "TUESDAY": 1, "WEDNESDAY":2 });
 const dayOfToday = DAYS_ENUM.MONDAY;

 //typescript
  enum DAYS {          // 기본값으로 0으로 시작
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  // 사용 지양 => 새롭게 값을 할당할 수 있음 (타입 보장 X)

  type Days = 'Monday' | 'Tuesday' | 'Wednesday';

  // Union 타입으로 대체 가능

  console.log(DAYS.Saturday); //6
}