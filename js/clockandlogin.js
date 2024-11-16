const clock = document.getElementById("clock");
const userForm = document.getElementById("user-form");
const userName = userForm.querySelector("#user-name");
const helloUser = document.getElementById("hello-user");

function getClock() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDay();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  clock.innerText = `${year}년${month}월${day}일${hour}시${minute}분${second}초`;
}

function paintHello() {
  const name = localStorage.getItem("username");
  helloUser.innerText = `hello ${name}`;
}

function handlesubmint(event) {
  event.preventDefault();
  localStorage.setItem("username", userName.value);
  userForm.classList.add("hidden");
  paintHello();
}

getClock();

setInterval(getClock, 1000);

userForm.addEventListener("submit", handlesubmint);

const name = localStorage.getItem("username");

if (name === null) {
  userForm.classList.remove("hidden");
} else {
  userForm.classList.add("hidden");
  paintHello();
}
