// 将两个类型合并成一个类型，第二个类型的键会覆盖第一个类型的键。

// 例如

type foo = {
  name: string
  age: string
}

type coo = {
  age: number
  sex: string
}

type Result = Merge<foo, coo> // expected to be {name: string, age: number, sex: string}

type Merge<F, S> = {
  // 优先第二个参数
  [key in keyof F | keyof S]: key extends keyof S
    ? S[key]
    : key extends keyof F
    ? F[key]
    : never
}
