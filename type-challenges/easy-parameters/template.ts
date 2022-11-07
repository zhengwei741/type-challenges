// 实现内置的 Parameters 类型，而不是直接使用它，可参考TypeScript官方文档。

// 例如：

// const foo = (arg1: string, arg2: number): void => {}

// type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]

type MyParameters<T> = T extends (...args: infer Args) => any ? Args : never;

// function MyParameters(obj) {
//   if (typeof obj === "function") {
//     const str = obj.toString();
//     const p = str.substring(str.indexOf("(") + 1, str.indexOf(")"));
//     return p.split(",");
//   }
// }
