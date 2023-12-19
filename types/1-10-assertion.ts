{
  /**
   * Type Assertions : 타입 강요
   */
  function jsStrFunc(): any {
    return 2;
  }

  const result = jsStrFunc();
  (result as string).length // undefined

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers()!;
  numbers.push(2) 
}