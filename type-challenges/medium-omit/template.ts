// 不使用 Omit 实现 TypeScript 的 Omit<T, K> 泛型。

// Omit 会创建一个省略 K 中字段的 T 对象。

// 例如：
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};

type t = "description" | "title";

type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

function MyOmit(obj, arr: unknown[] = []) {
  // 循环arr 剔除 obj 中相同的key
  let ret = {};
  Object.keys(obj)
    .filter((key) => !arr.includes(key))
    .forEach((k) => {
      ret[k] = obj[k];
    });
  return ret;
}
