    <div class="counter">
      <h2>scroll</h2>
      <div class="box">
        without throttle
        <span id="standartScroll">0</span>
      </div>
      <div class="box">
        without throttle
        <span id="throttletScroll">0</span>
      </div>
    </div>
    <div class="counter resize">
      <h2>resize</h2>
      <div class="box">
        without throttle
        <span id="standartResize">0</span>
      </div>
      <div class="box">
        without throttle
        <span id="throttletResize">0</span>
      </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js" integrity="sha256-qXBd/EfAdjOA2FGrGAG+b3YBn2tn5A6bhz+LSgYD96k=" crossorigin="anonymous"></script>





    * {
  padding: 0;
  margin: 0;
}

body {
  height: 500vh;
}

.counter {
  position: sticky;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.counter.resize {
  top: 200px;
}

.box {
  margin: 0 8px;
  border: 3px solid lime;
  border-radius: 15px;
  padding: 13px;
}




const standartScroll = document.getElementById("standartScroll");
const throttletScroll = document.getElementById("throttletScroll");

const eventScrollCounter = {
    standart: 0,
    throttlet: 0,
};

document.addEventListener("scroll", () => {
    eventScrollCounter.standart += 1;
    standartScroll.textContent = eventScrollCounter.standart;
});

document.addEventListener("scroll", _.throttle(() => {
    eventScrollCounter.throttlet += 1;
    throttletScroll.textContent =
        eventScrollCounter.throttlet;
}, 1000));


const standartResize = document.getElementById("standartResize");
const throttletResize = document.getElementById("throttletResize");

const eventResizeCounter = {
    standart: 0,
    throttlet: 0,
};

window.addEventListener("resize", () => {
    eventResizeCounter.standart += 1;
    standartResize.textContent = eventResizeCounter.standart;
});

window.addEventListener("resize", _.throttle(() => {
    eventResizeCounter.throttlet += 1;
    throttletResize.textContent =
        eventResizeCounter.throttlet;
}, 1000));

