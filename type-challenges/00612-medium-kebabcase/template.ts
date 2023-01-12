// Replace the camelCase or PascalCase string with kebab-case.

// FooBarBaz -> foo-bar-baz

// For example

type FooBarBaz = KebabCase<'FooBarBaz'>
const foobarbaz: FooBarBaz = 'foo-bar-baz'

type DoNothing = KebabCase<'do-nothing'>
const doNothing: DoNothing = 'do-nothing'

// type KebabCase<
//   S extends string,
//   R extends string = ''
// > = S extends `${infer F}${infer R}` ? (F extends '-' ? '' : '') : R

type KebabCase<S extends string> = S extends `${infer First}${infer Rest}`
  ? Rest extends Uncapitalize<Rest>
    ? `${Uncapitalize<First>}${KebabCase<Rest>}`
    : `${Uncapitalize<First>}-${KebabCase<Rest>}`
  : S
