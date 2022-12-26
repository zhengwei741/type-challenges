// 实现 Replace<S, From, To>
// 将字符串 S 中的第一个子字符串 From 替换为 To 。

// 例如

// 期望是 'types are awesome!'
type replaced = Replace<"types are fun!", "fun", "awesome">;

// 找到From 返回 替换To // 怎么找到from?
// 找不到 返回 S

type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer F}${From}${infer E}`
  ? `${F}${To}${E}`
  : S;
