// 在类型系统里实现通用的 Array.push 。

// 例如：

// type Result = Push<[1, 2], '3'> // [1, 2, '3']

type Push<T extends unknown[], U> = [...T, U];

function Push(arr = [], a) {
  return [...arr, a];
}
