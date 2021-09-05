const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");

const hiddenClock = document.querySelector(".clock");
const hiddenTodoForm = document.querySelector(".todo");
const hiddenTodoList = document.querySelector(".todo-list");
const hiddenQuote = document.querySelector(".quote");
const hiddenWeather = document.querySelector(".weather");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("USERNAME_KEY", username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);

  hiddenClock.classList.remove(HIDDEN_CLASSNAME);
  hiddenTodoForm.classList.remove(HIDDEN_CLASSNAME);
  hiddenTodoList.classList.remove(HIDDEN_CLASSNAME);
  hiddenQuote.classList.remove(HIDDEN_CLASSNAME);
  hiddenWeather.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem("USERNAME_KEY");

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
