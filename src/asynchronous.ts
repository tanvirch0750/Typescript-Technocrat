//
// Mocking
const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = 'Fetched data';
    if (data) {
      resolve(data);
    } else {
      reject('Failed to fetched data');
    }
  });
};

const getPromiseData = async (): Promise<string> => {
  const data = await makePromise();
  return data;
};
