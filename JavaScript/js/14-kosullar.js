// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else


// ------------------ kullanici bilgisi ----------------

// eger kullanici bilgisi varsa ekrana ismini yazdir
// eger (username.length > 0) {console.log(username)} degilse {console.log("bilgi yok")}
// if (username.length > 0) {console.log(username)} else {console.log("bilgi yok")}



// let username = prompt("Kullanıcı Adınızı Giriniz:")

// if (username) { // if kısmı her zaman true ise çalışır
//     console.log(`Kullanıcı Bilginiz : ${username}`)
// }
// else {
//     console.log("Bilgi Yok")
// }




// ------------------ geçti kaldı --------------------

var ogrVizeNot = 35; // Bu kod satırını değiştiriniz. 
var ogrFinalNot = 20; // Bu kod satırını değiştiriniz. 

var ogrOrtalama = (ogrVizeNot * 0.3) + (ogrFinalNot * 0.7);

if(ogrOrtalama > 0 && ogrOrtalama < 30) {
  console.log("Not ortalamanız: " +ogrOrtalama + " KALDINIZ(FF).");
}

else if(ogrOrtalama > 31 && ogrOrtalama < 49) {
  console.log("Not ortalamnız: " +ogrOrtalama + " DC - KOŞULLU ");
}

else if(ogrOrtalama > 50 && ogrOrtalama < 84) {
  console.log("Not ortalamnız: " +ogrOrtalama + " CC - GEÇTİNİZ ");
}

else if(ogrOrtalama > 85 && ogrOrtalama <= 100) {
  console.log("Not ortalamnız: " +ogrOrtalama + " AA - GEÇTİNİZ ");
}





// ----------------------- random sayi -----------------------------

// var randomSayi = Math.floor(Math.random() * 10);

// //Girdiğimiz sayıyı aklında tutması için prompt değişkene atanır

// var tahmin = prompt("1-10'a kadar bir sayı gir ve rastgele sayıyı bulmaya çalış!");

// if (tahmin === randomSayi && tahmin != null) alert("Bildin!!!");
// else if (tahmin == "") alert("Boş giriş yaptınız!");
// else if (tahmin == null) alert("Giriş yapmaktan vazgeçtiniz!");
// else {
//   alert("Bir daha denee :(, Random sayi: " + randomSayi);
// }




// --------------------- VKİ Hesaplama --------------------------------

// function vkiHesapla(weight, height) {
//     var vki; //Bu kod satırını değiştiriniz
    
//     if(vki<18.5) return alert(`Vücut kitle indeksiniz: ${vki}, değerleriniz düşüktür`);
//     if(vki>= 18.5 && vki <= 24.9) return alert(`Vücut kitle indeksiniz: ${vki}, normal değerdesiniz`);
//     if(vki>= 25.0 && vki <= 29.9) return alert(`Vücut kitle indeksiniz: ${vki}, kilolusunuz`);
//     if(vki>= 30) return alert(`Vücut kitle indeksiniz: ${vki}, aşırı kilolusunuz`);
//     return alert("Girdiğiniz değerleri kontrol ediniz");
//     };
    
    
    
//     vkiHesapla(weight,height)