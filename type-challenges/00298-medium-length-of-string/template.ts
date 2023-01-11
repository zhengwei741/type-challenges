// 计算字符串的长度，类似于 String#length 。

// 利用递归将字符串放进数组最后返回length
type LengthOfString<
  S extends string,
  L extends string[] = []
> = S extends `${infer F}${infer R}`
  ? LengthOfString<R, [F, ...L]>
  : L['length']
