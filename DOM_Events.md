***event.currentTarget -при клике это то где висит слушатель событий***  
***event.target - при клике конкретный елемент на который кликнули.***
***if event.currentTarget === event.target можно что б закрывалась модалка. Ти па при клике вне модального окна, при клике на сам бэкдроп***

 ***image.addEventListener('load', onImageLoaded, {once: true}); слушатель выполнится один раз и удалится***
 ***image.addEventListener('load', onImageLoaded, {once: true}); событие выполнится поссле загрузки картинки***

<!-- Метод addEventListener() -->
element.addEventListener(event, handler, options);

event - имя события, строка, например "click".
handler - коллбэк-функция которая будет вызвана при наступлении события.
options - необязательный объект параметров с расширенными настройками.
const button = document.querySelector(".my-button");

button.addEventListener("click", () => {
  console.log("Button was clicked");
});

Для коллбэка можно (и желательно) использовать отдельную функцию и передавать на неё ссылку. Именованная функция повышает читаемость кода.

const button = document.querySelector(".my-button");

const handleClick = () => {
  console.log("Button was clicked");
};

button.addEventListener("click", handleClick);

<!-- Метод removeEventListener() -->
Удаляет слушателя события с элемента. Аргументы аналогичны методу addEventListener().

element.removeEventListener(event, handler, options);

***Для удаления нужно передать ссылку именно на ту коллбэк-функцию, которая была назначена в addEventListener(). В таком случае для коллбэков используют отдельную функцию и передают её по имени (ссылку). Иначе не сработает, так как функции не равны, их ссылки разные, а если ставить ссылку на одну и ту  же функцию, то слушатель снимается именно тот (называется ссылочная идентичность колбэков***

<!-- Ключевое слово this -->
Если коллбэком будет функция которая использует this, по умолчанию контекст внутри неё будет ссылаться на DOM-элемент на котором висит слушатель.

const mango = {
  username: "Mango",
  showUsername() {
    console.log(this);
    console.log(`My username is: ${this.username}`);
  },
};

const btn = document.querySelector(".js-btn");

// ✅ Работает
mango.showUsername();

// ❌ this будет ссылаться на button если использовать showUsername как callback
btn.addEventListener("click", mango.showUsername); // не работает

// ✅ Не забывайте привязывать контекст методов объекта
btn.addEventListener("click", mango.showUsername.bind(mango));

<!-- Объект события -->
Чтобы обработать событие, недостаточно знать о том, что это клик или нажатие клавиши, могут понадобиться детали. Например текущее значение текстового поля, элемент, на котором произошло событие, встроенные методы и другое.

Каждое событие представляет собой объект, который содержит информацию о деталях события и автоматически передается первым аргументом в обработчик события. Все события происходят от базового класса Event.

const handleClick = event => {
  console.log(event);
};

button.addEventListener("click", handleClick);

Параметр event это и есть обьект события, который автоматически передается первым аргументом при вызове коллбэк функции. Мы можем называть его как угодно, но обычно его объявляют как e, evt или event.

Некоторые свойства объекта события:

event.type - тип события.
event.currentTarget - элемент, на котором выполняется обработчик события.

<!-- Действия браузера по умолчанию -->
Некоторые события вызывают действие браузера встроенное по умолчанию как реакция на определенный тип события. Например клик по ссылке инициирует переход на новый адрес, указанный в href, а отправка формы перезагружает страницу. Чаще всего это поведение нежелательно и его необходимо отменить.

Для отмены действия браузера по умолчанию на объекте события есть стандартный метод preventDefault().

+++++++++++++++++++++++

const form = document.querySelector(".register-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { username, password }
  } = event.currentTarget;
  console.log(username.value, password.value);
});

<!-- События клавиатуры -->
Есть два основных события клавиатуры: keydown и keyup. В отличии от других, события клавиатуры обрабатываются на документе, а не на конкретном элементе. Объекты событий клавиатуры происходят от базового класса KeyboardEvent.

document.addEventListener("keydown", event => {
  console.log("Keydown: ", event);
});

document.addEventListener("keyup", event => {
  console.log("Keyup: ", event);
});

При нажатии клавиши сначала происходит keydown, после чего keyup, когда клавишу отжали. На практике, в основном обрабатывают только событие keydown, так как оно происходит быстрее чем keyup и пользователь раньше видит результат нажатия. События keydown и keyup срабатывают при нажатии любой клавиши, включая служебные (Ctrl, Shift, Alt, Escape и другие).


<!-- Свойства key и code -->

Свойство key возвращает символ сгенерированный нажатием клавиши, принимая во внимание состояние клавиш модификаторов, например Shift, а так же текущий язык. Свойство code возвращает код физической клавиши на клавиатуре и не изменяется между языками.

document.addEventListener("keydown", event => {
  console.log("key: ", event.key);
  console.log("code: ", event.code);
});

Поставьте фокус в окно примера кликнув в него мышкой, отслеживание событий клавиатуры стоит на элементе document. Печатайте что-то на клавиатуре и смотрите результат.

<!-- Клавиши-модификаторы -->
Для обработки комбинации клавиш, например Ctrl + s или любую другую, на объекте события есть свойства ctrlKey, altKey, shiftkey и metaKey, хранящие булевое значение сигнализирующее о том, была зажата клавиша-модификатор или нет.

document.addEventListener("keydown", event => {
  event.preventDefault();

  if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
    console.log("«Ctrl + s» or «Command + s» combo");
  }
});

Некоторые комбинации клавиш могут конфликтовать с поведением браузера по умолчанию. Например, Ctrl + d или Command + d делает закладку. Нужно стараться проектировать систему комбинаций страницы так, чтобы она не пересекалась со встроенной в браузер. Но, в крайнем случае, поведение по умолчанию можно отменить вызвав метод event.preventDefault().

<!-- Событие submit -->

Отправка формы происходит при клике по кнопке с атрибутом type="submit" или нажатии клавиши Enter, находясь в каком-нибудь её текстовом поле. Событие submit можно применить для валидации (проверки) формы перед отправкой, так как на объекте события есть много полезных свойств связанных с элементами формы. Сабмит формы перезагружает страницу, поэтому не забывайте отменять действие по умолчанию методом preventDefault().

<form class="form" autocomplete="off">
  <input type="text" name="login" placeholder="Login">
  <input type="password" name="password" placeholder="Password">
  <button class="btn" type="submit">Register</button>
</form>

const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { login, password }
  } = event.currentTarget;

  if (login.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Login: ${login.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}

Свойство elements DOM-элемента формы содержит обьект со ссылками на все её элементы у которых есть атрибут name. Поэтому в примере мы получаем значение полей обращаясь к login.value и password.value.

***Что б собрать данные всей формы - FormData***

const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    console.log(value);
    console.log(name);
})}



<!-- Событие change -->
Происходит после изменения элемента формы. Для текстовых полей или textarea событие произойдёт не при каждом вводе символа, а при потере фокуса, что не всегда удобно. Например, пока вы набираете что-то в текстовом поле - события нет, но как только фокус пропал, произойдет событие change. Для остальных элементов, например select, чекбоксов и радио-кнопок, событие change срабатывает сразу при выборе значения.

++++++++++++++++++++++++

<p>
  Selected option text: <span class="text-output">none</span>
<p>
<p>
  Selected option value: <span class="value-output">none</span>
<p>

  <select class="pizza-select">
    <option value="four_meats">Four Meats</option>
    <option value="royal_cheese">Royal Cheese</option>
    <option value="vegetarian">Vegetarian</option>
    <option value="smoked_salmon">Smoked Salmon</option>
  </select>



const select = document.querySelector(".pizza-select");
const textOutput = document.querySelector(".text-output");
const valueOutput = document.querySelector(".value-output");

setOutput();

select.addEventListener("change", setOutput);

function setOutput() {
  const selectedOptionValue = select.value;
  const selectedOptionIndex = select.selectedIndex;
  const selectedOptionText = select.options[selectedOptionIndex].text;

  textOutput.textContent = selectedOptionText;
  valueOutput.textContent = selectedOptionValue;
}


<!-- Событие input -->
Происходит только на текстовых полях и textarea, и создаётся каждый раз при изменении значения элемента, не дожидаясь потери фокуса. На практике input это самое главное событие для работы с текстовыми полями формы.

<input type="text" class="text-input" />
<p>Text field value: <span class="output"></span></p>


const textInput = document.querySelector(".text-input");
const output = document.querySelector(".output");

textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
});

***Span не имеет value, имеет textContent***


<!-- События focus и blur -->
Элемент получает фокус при клике мыши или переходе клавишей Tab. Момент получения фокуса и потери очень важен, при получении фокуса мы можем подгрузить данные для автозаполнения, начать отслеживать изменения и т. п. При потере фокуса - проверить введённые данные.

При фокусировке элемента происходит событие focus, а когда фокус исчезает, например пользователь кликает в другом месте экрана, происходит событие blur. Активировать или отменить фокус можно программно, вызвав в коде одноименные методы focus() и blur() у элемента.

<button type="button" data-action="set">Set focus to input</button>
<button type="button" data-action="remove">Remove focus from input</button>
<br><br>
<input type="text" class="text-input" />


const textInput = document.querySelector(".text-input");
const setFocusBtn = document.querySelector('[data-action="set"]');
const removeFocusBtn = document.querySelector('[data-action="remove"]');

setFocusBtn.addEventListener("click", () => {
  textInput.focus();
});

removeFocusBtn.addEventListener("click", () => {
  textInput.blur();
});

textInput.addEventListener("focus", () => {
  textInput.value = "This input has focus";
});

textInput.addEventListener("blur", () => {
  textInput.value = "";
});

_______________________________________

<!-- Распространение событий (event propagation)  -->
- это термин описывающий жизненный цикл события, который включает в себя три этапа: погружение, таргетинг и всплытие. 
  Capturing phase (погружение) - событие начинается на window и тонет (проходит через все элементы-предки) до самого глубокого целевого элемента на котором произошло действие, например клик.
  Target phase (таргетинг) - событие дошло до целевого элемента. Этот этап включает только уведомление элемента о том, что на нём произошло действие.
  Bubbling phase (всплытие) - заключительная фаза, событие всплывает от самого глубокого, целевого элемента, через все элементы-предки до window.

  ***Всплывают почти все события, например события focus и blur не всплывают, поэтому сущестуют их всплывающие аналоги - focusin и focusout.***
  ___________________________________________

***event.target ***
- это ссылка на исходный элемент на котором произошло событие, в процессе всплытия он неизменен. Тоесть это ссылка на обьект на который мы клацнули, и даже там нету слушателя.
***event.currentTarget ***
- это ссылка текущий элемент до которого дошло всплытие, на нём сейчас выполняется обработчик события, тоесть здесь ссылка на обьект на который мы повесили слушателя и он словил событие.
___________________________________________________

<!-- stopPropagation(). -->
Если у элемента есть несколько обработчиков на одно событие, то даже при прекращении всплытия все они будут выполнены. То есть, метод stopPropagation() только препятствует продвижению события дальше. Если необходимо полностью остановить обработку события, используется метод stopImmediatePropagation(). Он не только предотвращает всплытие, но и останавливает обработку событий на текущем элементе.

ИНТЕРЕСНО
Не прекращайте всплытие без необходимости. Прекращение всплытия создаёт свои подводные камни, которые потом приходится обходить. Например, аналитика использует всплытие чтобы отслеживать события на странице.
____________________________________________

<!-- делегирование событий (event delegation) -->
1. Определить общего предка группы элементов для отслеживания событий.
2. Зарегистрировать на элементе-предке обработчик события которое мы хотим отлавливать от группы элементов.
3. В обработчике использовать event.target для выбора целевого элемента.
________________________________________________

***из библиотеки https://cdnjs.com/libraries/lodash.js***
<!-- Throttle -->
Прием throttle контролирует количество раз которое функция может быть вызвана в течение промежутка времени. То есть позволяет вызывать функцию не чаще чем один раз в N миллисекунд, гарантируя ее регулярное выполнение.

document.addEventListener(
  "scroll",
  _.throttle(() => {
    переменная += 1;
    throttledOutput.textContent = переменная;
  }, 300)
);

<!-- debounce -->

Прием throttle контролирует количество раз которое функция может быть вызвана в течение промежутка времени. То есть позволяет вызывать функцию не чаще чем один раз в N миллисекунд, гарантируя ее регулярное выполнение.

можно поставить на событие input и функция выполнится как только закончится ввод (между каждым вводом символа пройдёт заданное время), на примере фильтрации, будет выполнена фильтраци после ввода всего слова, а не по символьно.

document.addEventListener(
  "scroll",
  _.debounce(() => {
    переменная += 1;
    debouncedOutput.textContent = переменная;
  }, 300)
);

Методу debounce библиотеки Lodash можно передать необязательный третий аргумент - обьект параметров в котором есть два свойства leading (по умолчанию false) и trailing (по умолчанию true). Эти настройки изменяют режим и указывают, должна ли функция запускаться в начале потока событий или в конце после паузы.

document.addEventListener(
  "scroll",
  _.debounce(
    () => {
      console.log("Scroll handler call on every event stream start");
    },
    300,
    {
      leading: true,
      trailing: false,
    }
  )
);

На практике режим leading может применяться например в случае когда необходимо выполнить функцию отправки запроса на сервер при первом клике кнопки, после чего игнорировать все послудующие клики до паузы. В примере реализован debounce в обоих режимах для события scroll.
При этом режиме функция вызовется сразу, еще раз после завершения события ( перестал крутить скролл), и каждые 300 мс.
______________________________
<!-- Атрибут loading -->

<img src="my-image.jpg" loading="lazy" alt="Image description" />

* lazy - браузер выполнит отложенную загрузку изображения.
* eager - изображение будет загружено при первой возможности, то есть без отложенной загрузки.
* auto - браузер сам определяет, выполнять отложенную загрузку или нет. Значение по умолчанию..

_________________________________


