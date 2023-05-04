function reverse<T>(items: T[]): T[] {
  return items.reverse();
}

const names1: string[] = ['Alice', 'Bob', 'Charlie'];
const reversedNames = reverse<string>(names);
console.log(reversedNames); // Output: ["Charlie", "Bob", "Alice"]

const numbers: number[] = [1, 2, 3, 4];
const reversedNumbers = reverse<number>(numbers);
console.log(reversedNumbers); // Output: [4, 3, 2, 1]

const createArr1 = <X, Y>(p1: X, p2: Y): [X, Y] => {
  return [p1, p2];
};

const res1 = createArr1<number, string>(75, 'Shakib'); // number and string
const res2 = createArr1<boolean, Array<string>>(true, ['Shakib', 'Tamim']); // boolean and array

const addInfo = <T>(myinfo: T) => {
  const name1: string = 'Tanvir';
  return { name1, ...myinfo };
};

const myInfo = {
  age: 22,
  salary: 25000,
};

const res5 = addInfo(myInfo);
