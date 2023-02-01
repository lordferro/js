<p class="alert success js-alert">Operation successfull</p>


.alert {
    transform: translateX(-100%);
display: block;
    margin-left: 200px;
}
.alert.is-visible {
    transform: translateX(0%);
}



const NOTIFICATION_DELAY = 5000;
let timeOutId = null;

const refs = {
  notification: document.querySelector('.js-alert'),
};

refs.notification.addEventListener('click', onNotificationClick);

showNotification();

function onNotificationClick() {
  hideNotification();
  // отменили таймаут т к нажали мышкой и он не нужен
  clearTimeout(timeOutId)
};

function showNotification() {
  refs.notification.classList.add("is-visible");

  // здесь записали идентификатор в глобальную переменную timeOutId
  timeOutId = setTimeout(() => {
    console.log("timeout");
    hideNotification();
  }, NOTIFICATION_DELAY);
}

function hideNotification() {
  refs.notification.classList.remove('is-visible');
}