const refs = {
  startBtn: document.querySelector(
    "button[data-action-start]"
  ),
  stopBtn: document.querySelector(
    "button[data-action-stop]"
  ),
  clockface: document.querySelector(
    ".js-clockface"
  ),
};

class Timer {
  // в конструкторе деструктуризируем onTick
  constructor({ onTick }) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;
    // при запуске показывает нули
    this.resetTimer();
  }
// при запуске показывает нули
  resetTimer() {
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }

  start() {
    // проверяем или таймер не активен уже
    if (this.isActive) {
      // выходим если таймер уже активен
      return;
    }
    const startTime = Date.now();
    // послезапуска таймера, делаем его активным что б нельзя было запустить ещё один.
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time =
        this.getTimeComponents(deltaTime);

      this.onTick(time);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    // делаем таймер не активным т к остановили его
    this.isActive = false;
// после остановки таймера - обнуляем 
    this.resetTimer();
  }

  // Принимает время в милисекундах, выдаёт нормамльное время, добави ноль в начале функцией pad
  getTimeComponents(time) {
    const hours = this.pad(
      Math.floor(
        (time % (1000 * 60 * 24)) /
          (1000 * 60 * 60)
      )
    );
    const mins = this.pad(
      Math.floor(
        (time % (1000 * 60 * 60)) / (1000 * 60)
      )
    );
    const secs = this.pad(
      Math.floor((time % (1000 * 60)) / 1000)
    );
    return { hours, mins, secs };
  }

  // добавить ноль в начале, если число одинарное.
  pad(value) {
    return String(value).padStart(2, "0");
  }
}

// в обьекте настроек передаём onTick, модель данных должна получать информацию о функциях как обьект настроек, потому что эта модель(класс) можеть быть таймером для другого интерфейса, и ему передадим другую разметку.
const timer = new Timer({
  onTick: updateClockFace,
});

// если передать callback просто то контекст будет startBtn/stopBtn, поэтому привязываем контекст
refs.startBtn.addEventListener("click", timer.start.bind(timer));
refs.stopBtn.addEventListener("click", timer.stop.bind(timer));

function updateClockFace({ hours, mins, secs }) {
  refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}
