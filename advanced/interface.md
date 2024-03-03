## Interface VS Type

#### Interface
- API 또는 의사소통 시 규격사항

#### Data
- 데이터를 담을 때 데이터를 묘사

## Mapped Tpe

```typescript
// 원하는 interface를 optional로 생성
  type Optional<T> = {
    [P in keyof T]? = T[P] // for...in
  }

// 원하는 interface를 readonly로 생성
  type ReadOnly<T> ={
    readonly [P in keyof T] : T[P]
  }
// 원하는 interaface를 null이 가능하도록 생성
  type Nullable<T> = { 
    [ P in keyof T] : T[P] | null
  };

//Proxy라는 타입으로 새로 생성 가능
  type Proxy<T> ={
    get(): T;
    set(value: T): void;
  }

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  }
```

## Conditional Type
조건부로 타입 지정 가능
```typescript
  type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : T extends Function
  ? 'Function'
  : 'object';
```

## Pick Type / Omit type
Pick : 원하는 key들 중 선언하여 타입 지정
Omit: 원하는 key들 중 제거하여 타입 지정
```typescript
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
```