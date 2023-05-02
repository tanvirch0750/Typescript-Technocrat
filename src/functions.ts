function add(x: number, y: number): number {
  return x + y;
}

const addArrow = (x: number, y: number): number => {
  return x + y;
};

function greet(name: string, message?: string): void {
  if (message) {
    console.log(`Hello ${name}, ${message}`);
  } else {
    console.log(`Hello ${name}`);
  }
}

function multiply(x: number, y: number = 1): number {
  return x * y;
}

// callback function
const numArr = [1, 2, 3];
const newArr = numArr.map((elem: number) => elem * elem);

// use method in object
const person: {
  name: string;
  balance: number;
  addBalance(money: number): number;
} = {
  name: 'Mezma',
  balance: 5,
  addBalance(money: number) {
    return this.balance + money;
  },
};
