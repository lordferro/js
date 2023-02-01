***Promise.resolve().then(()=>{console.log(3);})***(https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)

______________________________________________________________


const promise = new Promise((resolve, reject) => {
  // Asynchronous operation
});

resolve(value) - функция для вызова при успешной операции. Переданный ей аргумент будет значением выполненного промиса.
reject(error) - функция для вызвова в случае ошибки. Переданный ей аргумент будет значением отклоненного промиса.
________________________________________
// Change value of isSuccess variable to call resolve or reject
const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

В переменную promise будет записан промис (объект) в состоянии pending, а через две секунды, после того как будет вызван resolve() или reject(), промис перейдет в состояние fulfilled или rejected и мы сможем его обработать.

____________________________________________________
***Метод then()***

promise.then(onResolve, onReject)

onResolve(value) - будет вызвана при успешном выполнении промиса и получит его результат как аргумент.
onReject(error) - будет вызвана при выполнении промиса с ошибкой и получит её как аргумент.

const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

// Will run first
console.log("Before promise.then()");

// Registering promise callbacks
promise.then(
  // onResolve will run third or not at all
  value => {
    console.log("onResolve call inside promise.then()");
    console.log(value); // "Success! Value passed to resolve function"
  },
  // onReject will run third or not at all
  error => {
    console.log("onReject call inside promise.then()");
    console.log(error); // "Error! Error passed to reject function"
  }
);

// Will run second
console.log("After promise.then()");
___________________________________________________________

***Метод catch()***

На практике в методе then() обрабатывают только успешное выполнение промиса, а ошибку его выполнения в специальном методе catch() для «отлова» ошибок.

// Change value of isSuccess variable to call resolve or reject
const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

promise
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  });

  ___________________________________________________

***Метод finally()***

Коллбэк-функция не получит никаких аргументов, поскольку нельзя определить выполнено ли обещание или отклонено. Тут будет выполняться код, который необходимо запустить в любом случае.

// Change value of isSuccess variable to call resolve or reject
const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

promise
  .then(value => console.log(value)) // "Success! Value passed to resolve function"
  .catch(error => console.log(error)) // "Error! Error passed to reject function"
  .finally(() => console.log("Promise settled")); // "Promise settled"

  _______________________________________________

  ***Цепочки промисов***

  Метод then() результатом своего выполнения возвращает еще один промис, значением которого будет то, что вернет его callback-функция onResolve. Это позволяет строить асинхронные цепочки из промисов.
  Так как метод then() возвращает промис, до его выполнения может пройти некоторое время, поэтому оставшаяся часть цепочки будет ждать. При возникновении ошибки в любом месте цепочки, выполнение всех последующих then() отменяется, а управление передается методу catch(). Поэтому он находится в конце цепочки промисов.

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 2000);
});

promise
  .then(value => {
    console.log(value); // 5
    return value * 2;
  })
  .then(value => {
    console.log(value); // 10
    return value * 3;
  })
  .then(value => {
    console.log(value); // 30
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log("Final task");
  });

  _________________________________________________________-

  ***Промисификация функций***

  Лучше если функция не заботится о том коде, который будет использовать её результат. Она просто выполняет какую-то операцию и возвращает результат своей работы во внешний код. Для того чтобы вернуть результат асинхронной операции, из функции необходимо вернуть промис. Промисификация - это преобразование функции с колбеками так, чтобы она не принимала коллбэки, а возвращала промис.

const fetchUserFromServer = username => {
  return new Promise((resolve, reject) => {
    console.log(`Fetching data for ${username}`);

    setTimeout(() => {
      // Change value of isSuccess variable to simulate request status
      const isSuccess = true;

      if (isSuccess) {
        resolve("success value");
      } else {
        reject("error");
      }
    }, 2000);
  });
};

fetchUserFromServer("Mango")
  .then(user => console.log(user))
  .catch(error => console.error(error));

  _________________________________________________________

***  Promise.all()***

Принимает массив промисов, ждет их исполнения и возвращает промис. Если все промисы выполнятся успешно, возвращаемый промис перейдет в состояние fulfilled, а его значением будет массив результатов исполнения каждого промиса. В случае когда хотя бы один из промисов будет отклонён, то возвращаемый промис перейдет в состояние rejected, а его значением будет ошибка.

Promise.all([promise1, promise2, promise3, ...])

Напишем функцию которая принимает текст для resolve() и задержку в миллисекундах, а результатом своего выполнения возвращает промис. Затем создадим два промиса с разным временем задержки.

const makePromise = (text, delay) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(text), delay);
  });
};

const promiseA = makePromise("promiseA value", 1000);
const promiseB = makePromise("promiseB value", 3000);

Promise.all([promiseA, promiseB])
  .then(value => console.log(value)) //["promiseA value", "promiseB value"]
  .catch(error => console.log(error));

Коллбэк метода then() будет вызван спустя три секунды, то есть когда выполнится промис promiseB. Промис promiseA выполнится через одну секунду и просто будет ожидать. Если какой либо из промисов будет отклонён, то будет вызван коллбэк метода catch().

__________________________________________________________

***Promise.race()***

Promise.race([promise1, promise2, promise3, ...])

Когда хотя бы один промис из массива исполнится или будет отклонён, то возвращаемый промис перейдёт в состояние resolved или rejected, а все остальные будут отброшены.

const makePromise = (text, delay) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(text), delay);
  });
};

const promiseA = makePromise("promiseA value", 1000);
const promiseB = makePromise("promiseB value", 3000);

Promise.race([promiseA, promiseB])
  .then(value => console.log(value)) // "promiseA value"
  .catch(error => console.log(error));

  __________________________________________________________________

  ***Promise.resolve() и Promise.reject()***
Статические методы для создания мгновенно выполняющихся успешно или отклонённых промисов. Работают аналогично new Promise() за исключением возможности указать задержку, но имеют более краткий синтаксис.

// Fulfilled promise
new Promise(resolve => resolve("success value")).then(value =>
  console.log(value)
);

Promise.resolve("success value").then(value => console.log(value));

// Rejected promise
new Promise((resolve, reject) => reject("error")).catch(error =>
  console.error(error)
);

Promise.reject("error").catch(error => console.error(error));