// 实现 TS 内置的 Pick<T, K>，但不可以使用它。
// 从类型 T 中选择出属性 K，构造成一个新的类型。

interface Todo {
  title: string
  description: string
  completed: boolean
}

// keyof 可以获取所有的key
type MyPick<T, K extends keyof T> = {
  // in ts 中的循环
  [P in K]: T[P]
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
}

type k = keyof Todo