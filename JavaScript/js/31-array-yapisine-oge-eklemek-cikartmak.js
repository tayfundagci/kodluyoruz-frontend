// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

let items = [10, 20, 30, 40, ]
console.log("items - ilk hali : ", items)

// Array: sona oge/eleman eklemek -> push
items.push(50)
console.log("50 : ", items)

// Array: basa oge/eleman eklemek -> unshift
items.unshift(5)
console.log("5 : ", items)

// Array: sondaki ogeyi cikarmak -> pop
let lastItem = items.pop() // son elemanı lastItem icerisine ekledik
console.log(
    "lastItem :", lastItem, 
    "items :", items
)

// Array: bastaki ogeyi cikarmak -> shift
let firstItem = items.shift() // ilk elemanı firstItem icerisine ekledik
console.log(
    "firstItem :", firstItem, 
    "items :", items
)

// Array içerisindeki bir ogenin bilgisinin degistirilmesi

// ilk elemanin degistirilmesi
items[0] = 5;
console.log(items)

// son elemanın degistirilmesi
items[items.length - 1] = 1000;
console.log(items)

items[2] = 100000
console.log(items)

// splice ile eleman silmek

var sports = ['basketball', 'football', 'tennis' ];
console.log(sports);

sports.splice(1,1);
console.log(sports); // basketball, tennis

// splice ile eleman eklemek

var sports = ['basketball', 'football', 'tennis' ];
console.log(sports); 

sports.splice(1,0,'baseball');
console.log(sports); 
