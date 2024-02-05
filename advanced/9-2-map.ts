{
  type Video = {
    title: string;
    author: string;
    description: string;
  };
  
  type VideoOptional = {
    title? : string;
    author? : string;
    description?: string;
  }

  type VideoReadOnly = {
    readonly title: string;
    readonly author: string;
  }

  type Optional<T> = {
    [P in keyof T]?: T[P]
  }

  type ReadOnly<T> ={
    readonly [ P in keyof T] : T[P]
  }

  type VideoOptional2 = Optional<Video>;

  const videoOp: VideoOptional2 = {
    title: 'hi',
    // hello: "hi"
  }

  type Animal = {
    name: string
    age: number
  }

  const animal: Optional<Animal>={
    name: "dog"
  }
  
  type Nullable<T> = { [ P in keyof T] : T[P] | null};
  const obj2: Nullable<Video> = {
    title:null,
    author: null,
    description: null
  }

  type Proxy<T> ={
    get(): T;
    set(value: T): void;
  }

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  }
}
