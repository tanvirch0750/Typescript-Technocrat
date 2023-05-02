// Object
const user1: {
  name: string;
  age: number;
  isMarried: boolean;
  readonly father: 'Hannanur Rahaman'; // can't change
} = {
  father: 'Hannanur Rahaman', // We can't write other than hannanur rahaman
  name: 'Tanvir',
  age: 22,
  isMarried: false,
};

type Person = {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
    zip: string;
  };
};

const person1: Person = {
  name: 'Tanvir',
  age: 22,
  address: {
    street: 'Shaheb Bazar',
    city: 'Chanpur',
    zip: '400',
  },
};

console.log(person1);

// Literal Type
type Status = 'pending' | 'approved' | 'rejected';

type Order = {
  id: number;
  status: Status;
  amount: number;
};

// Optional Type
type Person2 = {
  name: string;
  age?: number;
  address?: {
    street: string;
    city: string;
    zip: string;
  };
};

const per1: Person2 = {
  name: 'Tanvir',
};
