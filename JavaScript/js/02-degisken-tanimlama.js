// *************** let ve const ile değişken tanımlama**

// var ile degisken tanimlamak:
// var serverName = "api.kodluyoruz.org"
// console.log(serverName)


// let ile degiskeni bos tanimlamak:
let serverName;
console.log(serverName)

// let ile degiskene bilgi atamak:
serverName = "https://kodluyoruz.org"
console.log(serverName)


// let ile degiskene bilgi atayarak tanimlamak:
let password = "1234";
console.log(password)

// degisken atamasi yapmadan once kullanmaya calismak:
/* Hatalı Kullanım
console.log(fullName)
let fullName = "Tayfun Dağcı";
*/
let fullName = "Tayfun Dağcı2";

// let ile tanimlanan degiskenin icindeki bilgiyi degistirmek:
fullName = "Lorem Ipsum Dolor"
console.log(fullName)

// birlestirme veya ekleme islemi
fullName = fullName + " Yeni Bilgi"
fullName = "2: Bilgi : " +fullName

fullName = "Sifirlandi"
fullName += " ve Yeni Bilgi Eklendi"
console.log(fullName)

// const ile degiskeni bos tanimlamaya calismak :( :
// const serverPassword; // sadece degiskken tanimlandi ama ici bos??


// const ile degisken tanimlamak:  ** degismiycekse const, degisecekse let **
const SERVER_PASSWORD = "qjıevqhvqwıevjq"
console.log(SERVER_PASSWORD)

// SERVER_PASSWORD = "1234" 
// console.log(SERVER_PASSWORD)

// sabitiniz varsa const (bir kere tanımlanır ve asla değişmez)