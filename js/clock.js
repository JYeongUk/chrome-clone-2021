const clock = document.querySelector(".clock");
const timeNow = clock.querySelector("div span:first-child");
const dateNow = clock.querySelector("div span:last-child");
const dayarr = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const today = String(date.getDate()).padStart(2, "0");
  const days = date.getDay();

  timeNow.innerText = `${hours}:${minutes}:${seconds}`;
  dateNow.innerText = `${year}년 ${month}월 ${today}일 ${dayarr[days]}`;
}

getClock();
setInterval(getClock, 1000);
