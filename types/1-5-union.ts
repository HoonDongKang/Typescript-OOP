{
  /**
   * Union Types: OR
   */
  type Direction = "left" | "right" | "up" | "Down";
  function move(direction: Direction){
    console.log(direction);
  }

  type SuccessState = {
    response: {
      body: string;
    }
  };

  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(id: string, password: string): LoginState {
    return {
      response:{
        body:"Logged in!"
      }
    }
  };

  // printLoginState(state)
  function printLoginState(state: LoginState){
    if("response" in state){
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
}