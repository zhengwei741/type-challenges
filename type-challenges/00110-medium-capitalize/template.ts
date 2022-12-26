// 实现 Capitalize<T> 它将字符串的第一
// 个字母转换为大写，其余字母保持原样。

// 例如

type capitalized = Capitalize<"hello world">; // expected to be 'Hello world'

// Uppercase 转换大写

type MyCapitalize<S extends string> = S extends `${infer F}${infer E}`
  ? `${Uppercase<F>}${E}`
  : S;
