type AreaNumber = {
  height: number;
  width: number;
};

type Volume = {
  height: number;
  width: number;
  depth: number;
};

type A1 = AreaNumber['height']; // numer // look up types
type B1 = keyof AreaNumber; // 'height' | 'width'

// map type
type Area1 = {
  //[key in 'height' | 'width']: number; // this now similar to AreaNumber
  [key in keyof Volume]: number; // all of them will be number
};
type Area2 = {
  [key in keyof Volume]: string; // All of them will be string
};

type Area3 = {
  [key in keyof Volume]: Volume[key]; // All of them will be What Volume type has
};

// generic
type Area4<T> = {
  [key in keyof T]: T[key];
};

const area5: Area4<{ height: number; width: number }> = {
  height: 75,
  width: 80,
};
