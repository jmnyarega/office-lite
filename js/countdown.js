const state = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const getSeconds = () => {
  state.seconds += 1;
  if (state.seconds === 60) {
    state.minutes += 1;
    state.seconds = 0;
  }

  if (state.minutes === 60) {
    state.hours += 1;
    state.minutes = 0;
  }

  if (state.hours === 24) {
    state.days += 1;
    state.hours = 0;
  }

  if (state.days === 30) {
    state.days = 0;
    state.hours = 0;
    state.minutes = 0;
    state.seconds = 0;
  }

  days.innerText = paddingZeros(state.days);
  hours.innerText = paddingZeros(state.hours);
  minutes.innerText = paddingZeros(state.minutes);
  seconds.innerText = paddingZeros(state.seconds);
};

setInterval(getSeconds, 1000);

const paddingZeros = (val) => {
  if (val < 10) return `0${val}`;
  return val;
};
