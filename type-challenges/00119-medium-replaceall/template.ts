// 实现 ReplaceAll<S, From, To> 将一个字符串 S 中的所有子字符串 From 替换为 To。

// 例如

type replaced = ReplaceAll<"t y p e s", " ", "">; // 期望是 'types'

type ReplaceAll<S, From extends string, To extends string> = From extends ""
  ? S
  : S extends `${infer L}${From}${infer R}`
  ? `${ReplaceAll<L, From, To>}${To}${ReplaceAll<R, From, To>}`
  : S;
