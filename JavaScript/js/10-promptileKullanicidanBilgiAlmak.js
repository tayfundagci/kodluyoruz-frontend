// https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt

let fullName = prompt("Lütfen Adınızı Giriniz: ")

let greeting = document.querySelector("#greeting")

greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${fullName}</small>`