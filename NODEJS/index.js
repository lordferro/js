const makePromise = (text, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(text), delay);
  });
};

const promiseA = makePromise(
  "promise A value",
  1000
);
const promiseB = makePromise(
  "promise B value",
  3000
);

Promise.all([promiseA, promiseB])
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
