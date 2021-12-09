// let lastchild = document.querySelector("ul#list>li:last-child")
// lastchild.innerHTML = "son oge degisti..."

// let firstchild = document.querySelector("ul#list>li:first-child")
// firstchild.innerHTML = "ilk oge degisti..."

let ulDOM = document.querySelector("#list")
let liDOM = document.createElement('li')

liDOM.innerHTML = "Kendi Oluşturduğumuz Öğe"


ulDOM.append(liDOM) // en sona ekler
// ulDOM.prepend(liDOM) // en başa ekler