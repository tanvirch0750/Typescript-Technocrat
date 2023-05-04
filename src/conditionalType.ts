// A type is dependent on another type

type a1 = string;
type a3 = number;
type a4 = number;

// a2 is dependent on a1
type a2 = a1 extends string ? string : null; // this is string now.

// nested conditional type
type d = a1 extends null
  ? null
  : a3 extends number
  ? number
  : a4 extends null
  ? null
  : never;
// now d is number type

// Checking if a property exists in a object by conditional types
type Madrid = {
  winger: string;
  striker: string;
};

type A = keyof Madrid; // 'winger' | 'striker'

// 'winger' extends 'winger' | 'striker'
type CheckProperty<T, K> = K extends keyof Madrid ? true : false;

type ChekMadridSquad = CheckProperty<Madrid, 'winger'>;

// Removing property from Type. When from a union type if a value become a 'never' type then that value will be remove from uninon type.
type MadridStrikers = 'Karim' | 'Alvaro' | 'Mariano';

type RemoveStriker<T, K> = T extends K ? never : T;

type CurrentStrikers = RemoveStriker<MadridStrikers, 'Mariano'>;
