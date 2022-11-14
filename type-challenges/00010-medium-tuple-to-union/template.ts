// 实现泛型TupleToUnion<T>，它返回元组所有值的合集。

// 例如

type Arr = ["1", "2", "3"];

type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'

// type TupleToUnion<T> = K in keyof T

type TupleToUnion<T extends any[]> = T[number];

type TupleToUnion2<T extends readonly unknown[]> = T extends [
  infer First,
  ...infer Rest
]
  ? First | TupleToUnion<Rest>
  : never;
