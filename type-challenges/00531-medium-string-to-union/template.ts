// 实现一个将接收到的String参数转换为一个字母Union的类型。

// 例如

type Test = '123'
type Result = StringToUnion<Test> // expected to be "1" | "2" | "3"

// type StringToUnion<T extends string> = keyof {
//   [key in keyof T]: never
// }

type a = {
  a: 1
  b: 1
}

type b = keyof a

const c: b = 'a'

type StringToUnion<T extends string> = T extends `${infer F}${infer R}`
  ? F | StringToUnion<R>
  : never
