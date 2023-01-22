***Для навигации по этой иерархии у элементов есть следующие свойства.***

elem.parentNode - выберет родителя elem.
elem.childNodes - псевдомассив, хранит все дочерние элементы, включая текстовые.
elem.children - псевдомассив, хранит только дочерние узлы-элементы, то есть соответствующие тегам.
elem.firstChild - выберет первый дочерний элемент внутри elem, включая текстовые узлы.
elem.firstElementChild - выберет первый дочерний узел-элемент внутри elem.
elem.lastChild - выберет последний дочерний элемент внутри elem, включая текстовые узлы.
elem.lastElementChild - выберет последний дочерний узел-элемент внутри elem.
elem.previousSibling - выберет элемент «слева» от elem (его предыдущего соседа).
elem.previousElementSibling - выберет узел-элемент «слева» от elem (его предыдущего соседа).
elem.nextSibling - выберет элемент «справа» от elem (его следующего соседа)
elem.nextElementSibling - выберет узел-элемент «справа» от elem (его следующего соседа).
___________________________________________

const listWithId = document.querySelector('#menu');
listWithId.style.textTransform = 'uppercase';
listWithId.style.fontSize = '24px';
console.log(listWithId);

const listWithClass = document.querySelector('.menu');
console.log(listWithClass);

const menuItemsByTagName = document.querySelectorAll("li");
console.log(menuItemsByTagName);

_____________________
<!-- Свойство textContent -->
elem.textContent возвращает текстовый контент внутри элемента. Доступно для чтения и записи. Не зависимо что будет передано в textContent, данные всегда будут записаны как текст.

<!-- Свойство classList -->
Свойство classList
В свойстве classList хранится объект с методами для работы с классами элемента.

elem.classList.contains(cls) - возвращает true или false в зависимости от того, есть ли у элемента класс cls.
elem.classList.add(cls) - добавляет класс cls в список классов элемента.
elem.classList.remove(cls) - удаляет класс cls из списка классов элемента.
elem.classList.toggle(cls) - если класса cls нет, то добавляет его, если есть, наоборот удаляет.
elem.classList.replace(oldClass, newClass) - заменяет существующий класс oldClass на указанный newClass.

<!-- Свойство style -->
Используется для чтения и изменения инлайновых стилей. Возвращает объект CSSStyleDeclaration, который содержит список всех свойств, определенных только во встроенных стилях элемента, а не весь CSS. При записи свойства записываются в camelCase, то есть background-color превращается в element.style.backgroundColor и т. д.

const button = document.querySelector(".btn");

button.style.backgroundColor = "teal";
button.style.fontSize = "24px";
button.style.textAlign = "center";

console.log(button.style); // inline styles object

ИНТЕРЕСНО
На практике стилизация элементов выполняется добавленим CSS-классов. Свойство style используется для добавления каких-то динамических стилей, например во время анимации.

<!-- Атрибуты -->
DOM-элементам соответствуют HTML-теги у которых есть текстовые атрибуты. Доступ к атрибутам осуществляется при помощи стандартных методов. Эти методы работают со значением, которое находится в HTML.

elem.hasAttribute(name) - проверяет наличие аттрибута, возвращает true или false.
elem.getAttribute(name) - получает значение атрибута и возвращает его.
elem.setAttribute(name, value) - устанавливает атрибут.
elem.removeAttribute(name) - удаляет атрибут.
elem.attributes - свойство, возвращает объект всех атрибутов элемента.

const image = document.querySelector(".image");

console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

console.log(image.hasAttribute("src")); // true

console.log(image.getAttribute("alt")); // "Lake and clouds"

image.setAttribute("alt", "Amazing nature");

console.log(image.getAttribute("alt")); // Amazing nature

<!-- data-атрибуты -->
Позволяют добавить тегу произвольный атрибут и получить его значение в JavaScript. Эту возможность используют для того, чтобы упростить написание кода, например связать данные и разметку по уникальному идентификатору, указать тип действия кнопки и т. п.

<button type="button" data-action="save">Save</button>
<button type="button" data-action="close">Close</button>

Для получения значения data-атрибута используется свойство dataset, после которого идет имя атрибута. То есть data- отбрасывается, а остальное имя записывается как имя свойства объекта.

const saveBtn = document.querySelector('button[data-action="save"]');
console.log(saveBtn.dataset.action); // "save"

const closeBtn = document.querySelector('button[data-action="close"]');
console.log(closeBtn.dataset.action); // "close"

++++++++++++++++++++++++++++++++++++++++++++++

const saveBtn = document.querySelector('.editor button[data-action="save"]');
const closeBtn = document.querySelector('.editor button[data-action="close"]');

console.log(saveBtn.dataset.action); //save
console.log(closeBtn.dataset.action); //close

const dishes = document.querySelectorAll(".dishes > li");
dishes.forEach((dish) => {
  console.log(dish.dataset.id);
});

***dataset это обьект, со свойствами -action и значениями "save","close"***

<!-- Создание -->
document.createElement(tagName);
Создает элемент с именем tagName и возвращает ссылку на него как результат своего выполнения. tagName - это строка, указывающая тип создаваемого элемента. Элемент создается в памяти, в DOM его еще нет.

const heading = document.createElement("h1");
console.log(heading); // <h1></h1>

heading.textContent = "This is a heading";
console.log(heading); // <h1>This is a heading</h1>

const image = document.createElement("img");
image.src = "https://placeimg.com/640/480/nature";
image.alt = "Nature";
console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="Nature" />

<!-- Добавление -->
Чтобы созданный элемент был отображен на странице, его необходимо добавить к уже существующему элементу в DOM-дереве. Допустим, что добавляем в некий элемент element, для этого есть методы.

element.append(el1, el2, ...) - добавляет один или несколько элементов после всех детей элемента element.
element.prepend(el1, el2, ...) - добавляет один или несколько элементов перед всеми детьми элемента element.
element.after(el1, el2, ...) - добавляет один или несколько элементов после элемента element.
element.before(el1, el2, ...) - добавляет один или несколько элементов перед элементом element.
Во всех этих методах, el это элементы или строки, в любом сочетании и количестве. Строки добавляются как текстовые узлы.

++++++++++++++++++++++++++++++

const list = document.querySelector(".usernames");

// Adds an item to the end of the list
const lastItem = document.createElement("li");
lastItem.textContent = "Poly";
list.append(lastItem);

// Adds an item to the beginning of the list
const firstItem = document.createElement("li");
firstItem.textContent = "Ajax";
list.prepend(firstItem);

// Adds an item to the any place of the list
const listItem = document.createElement("li");
listItem.textContent = "Fed";
list.insertBefore(listItem, list.children[1])

// Adds a title before the list
const title = document.createElement("h2");
title.textContent = "USERNAMES";
list.before(title);

// Adds a paragraph after the list
const text = document.createElement("p");
text.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!";
list.after(text);


***Если элемент для вставки уже находится в DOM, то он изымается из своего старого места и добавляется в новое. Отсюда вытекает правило - один и тот же элемент не может быть одновременно в двух местах.***

<!-- Создание из массива обьектов разметки кнопок -->
<div class="js-color-picker"></div>

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

const colorPickerOptionsContainerEl = document.querySelector('.js-color-picker');

const makeColorPickerOptions = options => {
    return options.map(option => {
        const buttonEl =
            document.createElement("button");
        buttonEl.type = "button";
        buttonEl.classList.add(
            "color-picker-option"
        );
        buttonEl.textContent = option.label;
        buttonEl.style.backgroundColor =
            option.color;

        return buttonEl;
    });
    }

const elements = makeColorPickerOptions(colorPickerOptions);
colorPickerOptionsContainerEl.append(...elements)


<!-- Удаление -->
elem.remove();

***Repaint - происходит, когда изменения затронули стили влияющие на внешний вид элемента, но не на геометрию. Например opacity, background-color, visibility и outline. Браузер отрисовывает элемент заново, с учётом нового стиля. Также проверяется видимость других элементов, один или более могут оказаться скрыты под изменившим внешний вид.***
***Reflow - происходит когда изменения затрагивают содержимое, структуру документа, положение элементов. Идет пересчет позиционирования и размеров, что ведет к перерисовке части или всего документа. Изменение размера одного родительского контейнера повлияет на всех его детей и предков. Имеет значительно большее влияние на производительность, чем repaint.***

**Все вышеперечисленные операции блокируют браузер. Страница не может выполнять никакие другие операции в то время, когда происходит reflow или repaint. Причинами могут быть:**

Манипуляции с DOM (добавление, удаление, изменение, перестановка элементов)
Изменение содержимого, в т.ч. текста в полях форм
Расчёт или изменение CSS-свойств
Добавление и удаление таблиц стилей
Манипуляции с атрибутом class
Манипуляции с окном браузера (изменения размеров, прокрутка)
Активация псевдоклассов (например :hover)

<!-- Свойство innerHTML -->

<!-- Чтение -->
const article = document.querySelector(".article");
console.log(article.innerHTML);

<!-- Изменение -->
const title = document.querySelector(".article .title");
title.innerHTML = 'New and <span class="accent">improved</span> title';

***Если в свойство innerHTML записать пустую строку, то содержимое элемента будет очищено. Это простой и быстрый способ удаления всего содержимого.***

При таком подходе, в отличии от document.createElement(), мы не получаем ссылку на созданный DOM-элемент. Это первый шаг на пути к шаблонизации - создания большого количества однотипной разметки с разными данными по заранее определённому шаблону. Например, как в списке товаров интернет магазина и т. п.

Однотипная (шаблонная) разметка создается из массива данных. Приём заключается в переборе этого массива и составлении одной строки с HTML тегами, которую потом записываем в innerHTML элемента.

++++++++++++++++++++

const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
const list = document.querySelector(".list");

const markup = technologies
  .map((technology) => `<li class="list-item">${technology}</li>`)
  .join("");

// Check the console, you'll see a single string with HTML tags
console.log(markup);

// Adding all the markup in one operation
list.innerHTML = markup;

<!-- Добавление -->
Изменение elem.innerHTML полностью удалит и пересоздаст всех потомков элемента elem. Если элемент изначально не пустой, то будут дополнительные затраты на сериализацию уже существующей разметки, а это плохо.

+++++++++++++++++++++++

const article = document.querySelector(".article");
const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
   <a class="link" href="#">Read more...</a>`;

// Replace += with = operator. See the difference? 
// Article title is lost because we overwrite element content.
article.innerHTML += htmlString;
***Используйте свойство elem.innerHTML для добавления только в случае когда элемент elem пустой или если надо полностью заменить его содержимое.***

<!-- Метод insertAdjacentHTML() -->
Современный метод для добавления строки с HTML-тегами до, после или внутрь элемента. Решает проблему innerHTML с повторной сериализацией содержимого элемента при добавлении разметки к уже существующей.

elem.insertAdjacentHTML(position, string);

Аргумент position - это строка, позиция относительно элемента elem. Принимает одно из четырёх значений.

inserAdjacentHTML method
"beforebegin" - перед elem
"afterbegin" - внутри elem, перед всеми детьми
"beforeend" - внутри elem, после всех детей
"afterend" - после elem

const list = document.querySelector(".list");

const newTechnologies = ["React", "TypeScript", "Node.js"];
const markup = newTechnologies
  .map((technology) => `<li class="list-item new">${technology}</li>`)
  .join("");

list.insertAdjacentHTML("beforeend", markup);
list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");
***"beforebegin" и "afterend" работают только в том случае, если elem уже находится в DOM-дереве.***