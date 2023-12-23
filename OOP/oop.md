#### Object Oriented Programming

## Imperative and Procedural Programming 
- 절차적 프로그래밍

데이터와 함수 위주로 실행한다. 
main 함수 안 여러 함수들 내부 여러 함수들 절차적인 흐름
전역 변수를 이용하여 함수 사용
-> 흐름 파악 X

## Object Oriented Programming
- 객체지향 프로그래밍

서로 관련있는 데이터와 함수를 객체로 정의.
객체들끼리 의사소통을 통한 코드 흐름

EX) MediaPlayer 객체 - music 변수 + play 함수 + stop 함수

객체 내부 데이터 - fields
객체 내부 함수 - method
객체 - class

Class 를 이용하여 인스턴스 Object 생성

## OOP 4 Principles

# 1. Encapsulation
서로 연관있는 데이터와 함수들을 하나의 오브젝트에 캡슐화
-> 데이터간 관련성, 외부에서 접근 허용 / 불허

Ex) 고양이의 상태 (state) 외부에서 변경 불가 => play() / feed() 외부 동작을 통해 state 영향을 준다.

# 2. Abstraction
내부의 복잡한 기능을 이해하지 않고, 외부에 간단한 interface를 통해 사용 가능

Ex) 커피머신의 내부 구조, 기능을 이해하지 않아도 버튼조작으로 커피 내릴 수 있다.

# 3. Inheritance
커피 머신 클래스 상속을 통해 커피 머신의 기본 기능 + a 로 새로운 커피 머신들 생성 가능 

Ex) animal makeSound() 클래스 -> dog, cat object 모두 makeSound() 메서드 사용

# 4. Polymorphism
다양한 form 으로 생성

Ex) 상속받은 부모의 메서드를 사용할 수 있다. 

## OOP Class

### static

1. constructor -> 생성자 = 클래스 내부 매개변수 전달함으로써 인스턴스별 값 전달 가능.
2. 인스턴스마다 동일한 속성을 설정 시, static 사용 -> this가 아닌 클래스 명으로 접근.
3. static 으로 메서드 설정 가능 -> new 생성자 접근 X 클래스명.메서드로 생성.

### Encapsulation
public : 외부 접근 가능
private : 외부에서 접근 불가
protected : 외부 접근 불가, 상속한 클래스 내에서는 접근 가능

## Getter and Setter
Getter : 인스턴스 변수 반환
Setter : 인스턴스 변수 대입 또는 수정 

=> 클래스 내부 속성에 직접 접근하지 않아, 정보 은닉 가능
=> Set 내부 유효성 검사를 통해 안전한 데이터 대입과 private한 데이터 Get가능

## Abstraction
클래스 내부 수많은 데이터와 함수를 이해하지 않아도 interface 통해 쉽게 사용 가능케 한다.

interface로 해당 클래스에 사용되야할 메서드 지정 / class 는 implements를 통해 interface 안의 메서드를 보장.

=> 복잡한 클래스 내부 메서드 리스트를 interface로 정리를 하며 추상화 가능.

## Inheritance
extends 를 통해 상속받을 수 있고, super를 통해 부모 클래스의 메서드 사용 가능.

자식 클래스에서 생성자 사용 시, 부모 클래스 super 필요.

## Polymorphism
하나의 interface나 부모클래스를 상속한 자식 클래스들이 각 기능들을 구현하며
다양한 기능을 구현할 수 있다.

=> 약속된 API 사용(interface) + 다양한 기능