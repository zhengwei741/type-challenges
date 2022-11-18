// 有时，您可能希望根据某个属性在联合类型中查找类型。

// 在此挑战中，我们想通过在联合类型Cat | Dog
// 中搜索公共type字段来获取相应的类型。
// 换句话说，在以下示例中，
// 我们期望LookUp<Dog | Cat, 'dog'>获得Dog，
// LookUp<Dog | Cat, 'cat'>获得Cat。

interface Cat {
  type: "cat";
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
  type: "dog";
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
  color: "brown" | "white" | "black";
}

type c = Cat | Dog;

type a = keyof c;

type b = {
  [K in a]: string;
};

type MyDog = LookUp<Cat | Dog, "dog">; // expected to be `Dog`

type LookUp<U, T> = U extends { type: T } ? U : never;
