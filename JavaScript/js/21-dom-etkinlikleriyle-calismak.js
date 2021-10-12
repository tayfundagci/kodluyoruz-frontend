// https://www.w3schools.com/jsref/dom_obj_event.asp

let greeting = document.querySelector("#greeting")
greeting.addEventListener("click" /*"mouseover"*/, domClick)

function domClick()
{    
    console.log("etkinlik calisiyor")
    // console.log(this.innerHTML = "tiklandigi icin bilgi değişti")
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
}