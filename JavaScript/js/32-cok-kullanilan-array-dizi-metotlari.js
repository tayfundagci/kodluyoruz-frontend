// Cok Kullanilan Array(Dizi) Metotlari ve Array icinde Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://www.w3schools.com/js/js_array_methods.asp

let items = [1, 2, 3, 4, 5]

// Array içinde Array:
let femaleUsers = ["Ayse", "Hulya", "Merve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"]

items.unshift(femaleUsers)

items.push(maleUsers)

console.log(items)

console.log(items.length)
console.log(items[0].length) // array içindeki istediğimiz array'in length bilgisini aldık
console.log(items[0][0]) // Ayşe bilgisine ulastik 

// Array icerisinden oge ayırmak -> splice(pos, item?)
let newItems = items.splice(1, 5)
console.log("newItems: ", newItems)
console.log("items: ", items)

// Array içerisindeki ogenin index bilgisini bulmak -> indexOf('value')
items.unshift("Lorem")
items.push("Ipsum")

console.log( items.indexOf("Ipsum") )

// Array kopyalamak -> slice, [...ES6]
let copyItems = items
console.log(items)

copyItems.pop() // son ogeyi cikarttik
console.log("copyItems: ", copyItems)
console.log("items: ", items)

console.log("kopyalandıktan sonraki hali")
copyItems = items.slice() // kopyalama yaptı
copyItems.pop() // son ogeyi cikarttik
console.log("copyItems: ", copyItems)
console.log("items: ", items)

let es6Items = [...items] // es6 ve sonrasında gelen kopyalama islemi
console.log(es6Items)


// İki Array bilgisini Birleştirmek -> [...es6, ...es6]
let allUsers = [...femaleUsers, ...maleUsers] // es6 birden fazla array yapısını birleştirmek
console.log(allUsers)


// Array içerisindeki bilgisi String'e çevirmek -> toString, join
console.log(allUsers.toString())
console.log(allUsers.join(" --- "))


// istediğimiz index bilgisine göre oge eklemek -> splice(index, 0, value)
allUsers.splice(allUsers.length -1 , 0, "Melissa")
allUsers.splice(Math.floor(allUsers.length /2 ) , 0, "Lorem")
console.log(allUsers)





