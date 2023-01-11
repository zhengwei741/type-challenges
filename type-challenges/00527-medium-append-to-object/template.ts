// 实现一个为接口添加一个新字段的类型。
// 该类型接收三个参数，返回带有新字段的接口类型。

// 例如:

type Test = { id: '1'; name: 'jack' }
type Result = AppendToObject<Test, 'value', 4>
// expected to be { id: '1', value: 4 }

// 把 U 混入 T 的keys中 循环设置value
type AppendToObject<T, U extends string | number | symbol, V> = {
  [key in keyof T | U]: key extends keyof T ? T[key] : V
}
