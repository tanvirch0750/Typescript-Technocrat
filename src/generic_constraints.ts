// Make union type with keyof
type PersonType = {
  name: string;
  age: number;
  address: string;
};

type newType = 'name' | 'age' | 'address'; // Manually
const a: newType = 'age';

type newTypeUsingKeyof = keyof PersonType;
const b: newTypeUsingKeyof = 'age';
