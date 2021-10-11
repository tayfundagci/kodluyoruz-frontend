// eger kullanici adin varsa yazdir, yoksa bulunamadı yaz

let username = prompt("Kullanıcı Bilginizi Yazınız")
let info = document.querySelector("#info")

// ternary kullanimi:
// kosul ? dogruysa : yanlissa

info.innerHTML = `${username.length > 0 ? username : "Kullanici Bilginiz Bulunamadi :("}`
