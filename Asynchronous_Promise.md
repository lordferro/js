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

  +++++++++++++++++++++++

  // Примисификация функции makeOrder, она возвращает промис, и мы уже снаружи работаем через then и catch, makeOrder незнает о том коде который её вызывает

const makeOrder = (dish) => {
  const DELAY = 1000;

  return new Promise(
    (resolve, reject) => {
      const passed = Math.random() > 0.5;

      setTimeout(() => {
        if (passed) {
          resolve("cooking");
        } else {
          reject("no products");
        }
      }, DELAY);
    }
  );
  // надо вернуть промис от сюда, что б использовать then во внешнем коде
    
};

// присваиваем р промис
const p =  makeOrder("cookie");
p.then(onOrderSuccess).catch(onOrderFail);

// можно сделать так makeOrder("cookie").then(onOrderSuccess).catch(onOrderFail);

function onOrderSuccess(result) {
    console.log(result);
}

function onOrderFail(error) {
    console.log(error);
}

++++++++++++++++++++++++++++++++++++++

// https://pokeapi.co/api/v2/pokemon/1
// Запрос на сервер

const fetchPokemonById = id => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((r) => r.json());
}

fetchPokemonById(1).then(onFetchSuccess).catch(onFetchError);

function onFetchError(error) {
  console.log(error);
};

function onFetchSuccess (pokemon){
  console.log(pokemon);
};

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

++++++++++++++++++++++++++++++++++++++++++++++++++++

const horses = [
  "Secretariat",
  "Eclipse",
  "West",
  "Fox",
  "Seabiscuit",
];

function run(horse) {
  return new Promise((resolve) => {
    const time = getRandomTime(2000, 3500);

    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

function getRandomTime(min, max) {
  return Math.floor(
    Math.random() * (max - min + 1) + min
  );
}

console.log('%c Race started...', 'color: brown',);

// Запустили одну лошадь
run("Manog").then((x) => console.log(x));
//  Но нам нужно запустить всех лошадей, создадим массим промисов

// run передали как callback, вызовется для кажджого элемента массива horses  
const promises = horses.map(run);

// race выполнится самы первый промис и всё.
Promise.race(promises).then(({ horse, time }) => console.log(`${horse} finishing with time ${time}`));

// all выполнит все промисы

Promise.all(promises).then(x =>
  console.log(x.map(({ horse, time }) => console.log(`${horse} finishing with time ${time}`))));
  
  ++++++++++++++++++++++++++++++++++++++++

  <button class="js-start-race">Next race</button>
<hr>
<p class="js-progress"></p>
<p class="js-winner"></p>
<hr>

<table class="js-results-table">
  <thead>
    <tr>
      <th>Race</th>
      <th>Winner</th>
      <th>Time</th>
    </tr>
  </thead>
</table>

const horses = [
  "Secretariat",
  "Eclipse",
  "West",
  "Fox",
  "Seabiscuit",
];

let raceCounter = 0;

const refs = {
  startBtn: document.querySelector(
    ".js-start-race"
  ),
  winnerField:
    document.querySelector(".js-winner"),
  progressField: document.querySelector(
    ".js-progress"
  ),
  tableBody: document.querySelector(
    ".js-results-table"
  ),
};

refs.startBtn.addEventListener("click", onStart);

function onStart() {
  raceCounter += 1;

  // Получаем массив промисов, запускаем всех лошадей
 const promises = horses.map(run);

 updateWinnerField("");

 updateProgressField("Race is started");

 determineWinner(promises);

 waitForAllHorses(promises);
}

function waitForAllHorses(horseP) {
  Promise.all(horseP).then((x) =>
    updateProgressField("Race is finished")
  );
}

function determineWinner(horsesP) {
  Promise.race(horsesP).then(
    ({ horse, time }) => {
      updateWinnerField(
        `${horse} finishing with time ${time}`
      );
      updateResultsTable({ horse, time, raceCounter });
    }
  );
}

function run(horse) {
  return new Promise((resolve) => {
    const time = getRandomTime(2000, 3500);

    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

function getRandomTime(min, max) {
  return Math.floor(
    Math.random() * (max - min + 1) + min
  );
}

function updateWinnerField(message) {
  refs.winnerField.textContent = message;
}

function updateProgressField(message) {
  refs.progressField.textContent = message;
}

function updateResultsTable({ horse, time, raceCounter }) {
  const tr = ` <tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
  refs.tableBody.insertAdjacentHTML(
    "beforeend",
    tr
  );
}
