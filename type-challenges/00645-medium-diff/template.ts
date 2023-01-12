// 获取两个接口类型中的差值属性。

type Foo = {
  a: string
  b: number
}
type Bar = {
  a: string
  c: boolean
}

type Result1 = Diff<Foo, Bar> // { b: number, c: boolean }
type Result2 = Diff<Bar, Foo> // { b: number, c: boolean }

// type Diff<S, U> = {
//   [K in keyof S]: K extends keyof U ? never : S[K]
// } & {
//   [K in keyof U]: K extends keyof S ? never : U[K]
// }

// type Diff<T, K, A = T & K> = {
//   [P in Exclude<keyof A, keyof K> | Exclude<keyof A, keyof T>]: A[P]
// }

type Diff<O extends Object, O1 extends Object> = {
  [P in keyof Omit<O, keyof O1> | keyof Omit<O1, keyof O>]: P extends keyof O
    ? O[P]
    : P extends keyof O1
    ? O1[P]
    : never
}

function diff(objA = {}, objB = {}) {
  let ret = {}

  Object.keys(objA).forEach((key) => {
    if (!objB[key]) {
      ret[key] = objA[key]
    }
  })
  Object.keys(objB).forEach((key) => {
    if (!objA[key]) {
      ret[key] = objB[key]
    }
  })
  return ret
}
