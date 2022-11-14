// 实现一个通用MyReadonly2<T, K>，它带有两种类型的参数T和K。

// K指定应设置为Readonly的T的属性集。如果未提供K，
// 则应使所有属性都变为只读，就像普通的Readonly<T>一样。

// 例如

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

const todo: MyReadonly2<Todo, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property
todo.completed = true; // OK

// 默认 keyof T
// 先将传入类型设置readonly
type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [key in K]: T[key];
} & {
  [key in Exclude<keyof T, K>]: T[key];
};

// type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T, K> & {
//   readonly [P in K]: T[P];
// };
