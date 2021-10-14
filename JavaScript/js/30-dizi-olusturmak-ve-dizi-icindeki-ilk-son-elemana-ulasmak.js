// Array olusturmak
let domain = "kodluyoruz"
let isActive = false
let items = [15, 25, 35, isActive, domain]
console.log(items)

let emptyArray = [] // bos list

// Array içerisindeki eleman/oge sayisini ogrenmek
console.log(
    items.length // array icindeki oge sayisi
)

document.querySelector('#info').innerHTML = items.length

// array icindeki ilk elemanin cagirilmasi
console.log( items[0] )

// array icindeki son elemanın cagirilmasi
console.log( items[items.length - 1] )

// array icindeki ortadaki elemanın cagirilmasi
console.log(
    "ortadaki :",
    items[ Math.floor(items.length/2) ]
)

// degisken icindeki bilginin array olup olmadıgının kontrol edilmesi
console.log(
    typeof(items) // object olarak cikti veriyor
)

console.log(
    Array.isArray(items)
)

// hangileri isArray -> true verir?
console.log("[] : ", Array.isArray( [] ) )
console.log("1 : ", Array.isArray( 1 ) )
console.log("true : ", Array.isArray( true ) )