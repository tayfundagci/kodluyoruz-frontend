let username = "tayfun"
const DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN
 
/* 
console.log("Merhaba", username, "sitemize hoşgeldin", "mail adresin: ", email)
*/



let info = `
Merhaba ${username} sitemize hoşgeldin.. 
mail adresin: ${email}

mail adresinin uzunluğu: ${email.length}
Borcunuz: ${(2 + 3) * 10} TL
günün saat bilgisi : ${new Date().getHours()}

kısa isminiz: ${username[0].toUpperCase()}.
`

console.log(info)

