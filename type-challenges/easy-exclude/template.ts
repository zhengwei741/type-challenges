// 实现内置的Exclude <T, U>类型，但不能直接使用它本身。

// 从联合类型T中排除U的类型成员，来构造一个新的类型。

// 例如：

// type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'

type MyExclude<T, U> = T extends U ? never : T

// const MyExclude = (arr1 = [], t = []) => {
//   return arr1.filter(item => !t.includes(item))
// }

function getName<T extends { name: string }>(obj: T) {
  return obj.name
}

getName({ a: 1, name: '123' })

type a<T, U> = T extends U ? '1' : '2'

type tt = '1' | '2' | '3'
type ttt = '1' | '2' 

type aa = a<tt, ttt>

// 依次对比
// '1'  |    '2'   |     '3'
 
//  ?         ?           ?
 
// '1'  |    '2'


// '1'       '1'         '2'