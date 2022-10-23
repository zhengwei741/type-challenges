// 传入一个元组类型，将这个元组类型转换为对象类型，这个对象类型的键/值都是从元组中遍历出来。

// 例如：

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

// 字变量类型
let str = '123'
type s = typeof str // s string
const str2 = '123' // 常量
type s2 = typeof str2 // s2 123

type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

type TupleToObject<T extends readonly (number | string | symbol)[]> = {
  [K in T[number]]: K
}

type t = typeof tuple

// 知识点
// in T[number] 遍历数组