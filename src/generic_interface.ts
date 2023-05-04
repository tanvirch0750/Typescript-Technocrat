interface KeyValuePair<K, V = null> {
  key: K;
  value: V;
}
/*
    In this interface, K and V are type parameters that can be used to specify the 
    type of the key and value properties respectively.
  */

const myMap: KeyValuePair<string, number>[] = [
  { key: 'foo', value: 123 },
  { key: 'bar', value: 456 },
];
/*
    In this case, the K type parameter is set to string, and the V type parameter 
    is set to number. This means that the key property will always be a string, 
    and the value property will always be a number.
  */

const myMap2: KeyValuePair<number, string>[] = [
  { key: 123, value: 'foo' },
  { key: 456, value: 'bar' },
];
/*
    In this case, the K type parameter is set to number, and the V type parameter 
    is set to string. This means that the key property will always be a number, 
    and the value property will always be a string.
  */
interface jobDetail {
  name: string;
  salary: number;
}
const myObj: KeyValuePair<string, jobDetail> = {
  key: 'Tanvir',
  value: {
    name: 'Dev',
    salary: 50000,
  },
};
