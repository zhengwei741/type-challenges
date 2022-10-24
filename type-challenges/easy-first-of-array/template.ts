type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3


// type First<T extends any[]> = T extends [] ? never : T[0]
// extends 类型条件判断
// const frist = (arr = []) => {
//   if (!arr[0]) {
//     return 'never'
//   }
//   return arr[0]
// }

// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
// 判断length
// const frist = (arr = []) => {
//   if (arr.length === 0) {
//     return 'never'
//   }
//   return arr[0]
// }

// type First<T extends any[]> = T[0] extends T[number] ?  T[0]: never
// T[number] 返回 never
// T[0] 是否是never
// union 判断条件

type First<T extends any[]> = T extends [infer First, ...infer rest] ? First : never
// 结构
// const frist = (arr = []) => {
//   const [frist, ...rest] = arr
//   return frist ? frist : 'never'
// }