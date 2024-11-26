const stopBtn = document.querySelector('.stop-btn');
const startBtn = document.querySelector('.start-btn');
const resetBtn = document.querySelector('.reset-btn');
let displayTime = document.getElementById('displayTime');

let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  let h = hours < 10 ? '0' + hours : hours;
  let m = minutes < 10 ? '0' + minutes : minutes;
  let s = seconds < 10 ? '0' + seconds : seconds;

  displayTime.innerHTML = h + ':' + m + ':' + s;
}

function watchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000);
}

function watchStop() {
  clearInterval(timer);
}

function watchReset() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML = '00:00:00';
}

startBtn.addEventListener('click', function () {
  watchStart();
});

stopBtn.addEventListener('click', function () {
  watchStop();
});

resetBtn.addEventListener('click', function () {
  watchReset();
});
