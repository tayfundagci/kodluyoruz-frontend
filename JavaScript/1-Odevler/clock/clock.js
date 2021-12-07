let username = prompt("Kullanıcı Adınızı Giriniz:")
let user = document.querySelector("#user")
let tarih = document.querySelector("#tarih")
let info = document.querySelector("#info")


user.innerHTML = `Merhabalar, ${username[0].toUpperCase()}${username.slice(1).toLowerCase()}! Hoşgeldin! `


function checkTime() {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
  }
  
   const myTime = () => {
    var date = new Date()
    var saat = date.getHours();
    var dakika = date.getMinutes();
    var saniye = date.getSeconds();
    var day = date.getDay()
    dakika = checkTime(dakika);
    saniye = checkTime(saniye);
    {
        if (day == 1) {
            day = "Pazartesi";
          } else if (day == 2) {
            day = "Salı";
          } else if (day == 3) {
            day = "Çarşamba";
          } else if (day == 4) {
            day = "Perşembe";
          } else if (day == 5) {
            day = "Cuma";
          } else if (day == 6) {
            day = "Cumartesi";
          } else if (day == 7) {
            day = "Pazar";
          }
    }
    tarih.innerHTML = `${(saat+":"+dakika+":"+saniye+" "+day)}`
    var t = setTimeout(function(){ myTime() }, 1000);
   }
   myTime();


info.innerHTML = `Tarihinde sitemize giriş yaptınız ve şu anda saat ile gün bilgisini görüntülüyorsunuz.`





    




