type space = " " | "\n" | "\t";
type TrimLeft<S extends string> = S extends `${space}${infer R}`
  ? TrimLeft<R>
  : S;
type TrimRight<S extends string> = S extends `${infer R}${space}`
  ? TrimRight<R>
  : S;

// 先移除左边 在移除右边
type Trim<S extends string> = TrimRight<TrimLeft<S>>;
