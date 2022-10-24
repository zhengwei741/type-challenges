// 实现一个 IF 类型，它接收一个条件类型 C ，
// 一个判断为真时的返回类型 T ，
// 以及一个判断为假时的返回类型 F。 C 只能是 true 或者 false， T 和 F 可以是任意类型。

// 例如：

type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'

type If<T extends boolean, A, B> = T extends true ? A : B

const _IF = (t, a, b) => {
  return t ? a : b
}

// class  extends 继承
// <T extends boolean> 约束
//  = T extends true 条件判断