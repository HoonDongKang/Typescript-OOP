# Programming?

입력된 값을 받고 (input) 연산과 처리(operation)를 한 후, 값을 출력(output)하는 것.

연산을 처리하기 전, 데이터는 변수에 저장을 시켜둔다.

하지만 변수의 타입을 지정하지 않는다면 어떤 데이터든 저장이 될 수 있기 때문에 안정성이 줄어들 수 밖에 없다.

변수뿐만 아니라 함수를 처리할 때에도 동일하게 입력값과 출력값의 타입을 지정하지 않는다면 함수의 입출력을 추론하기 어렵다.

=> 반대로 타입을 지정하면 변수의 값이나, 함수의 입출력값을 명확히 추론하고 안정적으로 프로그래밍을 동작시킬 수있다.

## Types

number / string / boolean / void (리턴값 x)

undefined / null / unknown (js 변환 시) / any / never(리턴하지 않을 때) / object(원시값 제외 값) -> 지양

- void VS never
void 는 하나의 단위 / never은 모순
반환하지 않는 함수, 할당 가능 = void 반환
영원히 리턴하지 않는 함수 = never ( 에러처리 또는 while(true) )

## Function type

1. Optional parameter
- 선택적으로 매개변수를 인자로 받고 싶을 때, ? optional parameter로 지정 가능

2. Default parameter
- 매개변수의 기본값 설정 가능

3. Rest parameter
- 매개변수의 수가 정해져있지 않을때, ...parameter로 배열 형태의 값 받을 수 있음.

## Array VS Tuple

- Array : 같은 타입의 배열 형태
- Tuple : 다른 타입의 배열 형태 -> 지양 ( interface, type alias, tuple 로 대체 가능)
 => react useState 가 tuple 형태 => 사용자가 배열의 형태를 인지하면 활용도가 높아지겠지만 남용하면 안된다.

 ## Type Alias

새로운 타입을 지정하여 사용할 수 있다.

String Literal Type => 값 하나만을 지정한 타입도 생성 가능

## Union Type
타입을 지정할 때, OR 형태로 유니온 값을 지정할 수 있다. => |
- 다른 타입에서 같은 속성을 설정함으로써 discrimated union 으로 타입을 활용할 수 있다.
SuccessState = { result: "true" }
FailState = { result: "false" }

## Intersection Type
타입 지정할 때, AND 형태로 값 지정 가능 => &

## ENUM
상수 지정을 위한 집합 - 기본값으로 0부터 시작 => 숫자나 문자열 할당 가능

=> 사용 지양 - 새로운 값을 할당할 수 있다 -> 타입 보장 X

=> UNION 타입을 통해 상수 할당 가능.

## Type Inferance 
타입 추론 -> 타입을 지정하지 않아도 타입을 추론하여 인식

-> 원시값은 명확히 인식하지만 정확하게 인식하지 못할 수도 있다. 

일관성있는 타입 지정 필요

## Type Assertion
타입 강요 -> `${variable} as ${type}` / `<${type}>${variable}` 을 통해 변수의 타입을 캐스팅할 수 있다.

-> 정말 장담하는 경우가 아니라면 사용 지양