<!-- Атрибут defer -->

<script defer src="path-to-script.js"></script>
Атрибут defer указывает браузеру загружать файл скрипта в фоновом режиме, паралельно обработке HTML-документа и построению DOM. Скрипт будет выполнен только после того как HTML-документ обработан, а DOM построен. Такие скрипты не блокируют построение DOM-дерева и гарантированно выполняются в том порядке, в котором указаны в HTML-документе.

<!-- Атрибут async -->

<script async src="path-to-script.js"></script>

Загрузка скрипта с атрибутом async не блокирует построение DOM, но он выполняется сразу после загрузки. Это значит, что такие скрипты могут заблокировать построение DOM, и выполняются в произвольном порядке.

Тоесть скрипт загружается и паралельно строится DOM, как только скрипт загрузился, построение DOM останнавливается и начинается выполнение скрипта.