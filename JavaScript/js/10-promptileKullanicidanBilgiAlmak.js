// https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt

let fullName = prompt("Lütfen Adınızı Giriniz: ")

let promptt = document.getElementById('promptt')

promptt.innerHTML = `${promptt.innerHTML} <small style="color:red">${fullName}</small>`