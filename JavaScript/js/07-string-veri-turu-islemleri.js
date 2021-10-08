// ********* string veri türü işlemleri *********
// https://www.w3schools.com/jsref/jsref_obj_string.asp

let email = "hakanyalcinkaya@gmail.com"
let firstName = "hakan"
let lastName = "YALCINKAYA"

// string karakter sayisi -> length
console.log( email.length )

// ilk karakteri bulmak -> [0]:
console.log(firstName[0])
console.log(firstName.charAt(0))

// büyük harf / küçük harf:
firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLowerCase()
console.log(firstName)

// string içinde istediğimiz bilgiyi aramak ve yerini bulmak -> search:
console.log(email.search("@"))
console.log(email[15])

email.search('olmayan') // -1

// belli bir yere  kadar al -> slice: (domain bilgisi)
let DOMAIN = email.slice(email.search("@") + 1)
console.log(DOMAIN)

console.log(
    DOMAIN.slice(0, DOMAIN.indexOf('.')) // sadece gmail kısmını alma
)

// bilgiyi değiştir -> replace :
email = email.replace('gmail.com', 'kodluyoruz.org')
console.log(email)

// istediğim bilgi var mı? -> includes:
email.includes('asufsauhf') // false
email.includes('@') // true

// istediğim bilgiyle başladı mı ? bitti mi? -> startsWidth , endsWidth :
console.log(
    email.endsWith('kodluyoruz.org')
)

// İlk harflerini büyük yapmak
firstName = "FIRSTNAME"
lastName = "LASTNAME"
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`

console.log(fullName)

