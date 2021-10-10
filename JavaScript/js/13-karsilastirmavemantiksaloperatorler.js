// https://www.w3schools.com/js/js_comparisons.asp

let price = "100"
let user = "tayfun"

// == eşitse
console.log ("== :", price == 1)
console.log ("== :", price == 100)

// === hem değeri hem de türü eşitse
console.log ("=== :", price === 1)
console.log ("=== :", price === 100)

// != eşit değilse
console.log ("!= :", user != "guest")

// < küçükse
console.log ("price < :", price < 100)

// <= küçük veya eşitse
console.log ("price <= :", price <= 100)

// > büyükse 
console.log ("price > :", price > 200)

// >= büyük veya eşitse
console.log ("price >= :", price >= 100)

// && ve
price = 0
console.log( price > 0 && user != "guest")

// || veya
console.log( price > 0 || user != "guest")

// ! değil (tersi)
user = "guest"
price = 1
console.log( price > 0 && !user == "guest")
