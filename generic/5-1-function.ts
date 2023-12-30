{
  function checkNotNullBand(arg: number | null): number{
    if(arg == null){
      throw new Error("not valid number!");
    }
    return arg;
  }

  function checkNotNull<T>(arg: T | null): T{
    if(arg == null){
      throw new Error("not valid number!");
    }
    return arg;
  }

  const number = checkNotNull(123);
  console.log(typeof number);
  const boolean = checkNotNull(true);
  console.log(typeof boolean);
}