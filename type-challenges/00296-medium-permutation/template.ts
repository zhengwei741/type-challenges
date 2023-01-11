// 实现联合类型的全排列，将联合类型转换成所有可能的全排列数组的联合类型。

type perm = Permutation<'A' | 'B' | 'C'>
// ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C']
//  | ['B','C','A'] | ['C','A','B'] | ['C','B','A']

type a = 'A' | 'B' | 'C'

// type Permutation<T, U = T> = [T] extends [never]
//   ? []
//   : U extends T
//   ? [U, ...Permutation<Exclude<T, U>>]
//   : []

// 你的答案
// [T] extends [never] 可以正确判断never类型。
// 如果T是never类型，不以元组或数组的方式判断never类型，
// 那么ts会直接推断这个表达式为never不进入预期判断的条件。
// R extends R ? [R, ...Permutation< Exclude<T, R> > ] : []
// 联合条件类型的分发 ＋ 递归；ts扁平化递归得到的数据，一层层往上递归回来，得到预期结果。
// 参考链接：https://github.com/type-challenges/type-challenges/issues/614
type Permutation<T, R = T> = [T] extends [never]
  ? []
  : R extends R
  ? [R, ...Permutation<Exclude<T, R>>]
  : []
