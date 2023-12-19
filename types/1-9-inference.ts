{
  /**
   * Type Inference
   */
  let text: string = "hello";

  function print(message){  // implicitly any type
    console.log(message);
  }

  function print(message = "hello"){  // inferance string type
    console.log(message);
  }

  function add(x: number, y: number){  // inferance number type
    return x + y;
  }

  const result = add(1, 2); // inferance number type

  
}