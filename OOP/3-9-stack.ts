{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
  }

  class StackImple implements Stack{
    private _size: number = 0;
    private head?: StackNode;

    get size(){
      return this._size;
    }

    push(value: string){
      const node: StackNode = { value, next: this.head };
      this.head = node;
      this._size ++;
    };

    pop(): string{
      if(this.head == null){throw new Error("stack is Empty")};
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    };
  }

  const stack = new StackImple();
  stack.push("1 Kang");
  stack.push("2 dong");
  stack.push("3 hoon");
  while (stack.size !==0 ){
    console.log(stack.pop());
  }
}