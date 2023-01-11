// 在这个挑战中，你需要写一个接受数组的类型，并且返回扁平化的数组类型。

// 例如:

type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]

type Flatten<S extends unknown[], L extends unknown[] = []> = S extends [
  infer F,
  ...infer R
]
  ? F extends unknown[]
    ? Flatten<R, [...L, ...Flatten<F>]>
    : Flatten<R, [...L, F]>
  : L
