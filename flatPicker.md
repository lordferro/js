Библиотека flatpickr
Используй библиотеку flatpickr для того чтобы позволить пользователю кроссбраузерно выбрать конечную дату и время в одном элементе интерфейса. Для того чтобы подключить CSS код библиотеки в проект, необходимо добавить еще один импорт, кроме того который описан в документации.

// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

Библиотека ожидает что её инициализируют на элементе input[type="text"], поэтому мы добавили в HTML документ поле input#datetime-picker.

<input type="text" id="datetime-picker" />

Вторым аргументом функции flatpickr(selector, options) можно передать необязательный объект параметров. Мы подготовили для тебя объект который нужен для выполнения задания. Разберись за что отвечает каждое свойство в документации «Options» и используй его в своем коде.

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

Выбор даты
Метод onClose() из обьекта параметров вызывается каждый раз при закрытии элемента интерфейса который создает flatpickr. Именно в нём стоит обрабатывать дату выбранную пользователем. Параметр selectedDates это массив выбранных дат, поэтому мы берем первый элемент.

Если пользователь выбрал дату в прошлом, покажи window.alert() с текстом "Please choose a date in the future".
Если пользователь выбрал валидную дату (в будущем), кнопка «Start» становится активной.
Кнопка «Start» должа быть не активна до тех пор, пока пользователь не выбрал дату в будущем.
При нажатии на кнопку «Start» начинается отсчет времени до выбранной даты с момента нажатия.