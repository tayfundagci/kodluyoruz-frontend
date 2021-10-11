let username = prompt("Kullanıcı Adınız:")
let age = prompt("Yaşınız:")
let info = document.querySelector("#info")

if(username && age >= 18)
{
    info.innerHTML = "ehliyet alabilirsiniz."
}
else if(!username)
{
    info.innerHTML = "Kullanıcı Adınız Yok"
}
else if( !(age >= 18) )
{
    info.innerHTML = "Yaş Bilginiz Yok veya 18 Yaşından Küçüksünüz"
}


// --------------------------------------------------------

// let hava = "Karlı";
// switch(hava) {
//   case "Yagmurlu":
//       console.log("Semsiyeni yanina almayi unutma");
//       break;
//   case "Gunesli":
//       console.log("Hafif giyin");
//   case "Bulutlu":
//       console.log("Disari cik");
//       break;
//   case "Karlı":
//       console.log("Kalin giyin");
//       break;
//   case "Firtinali":
//       console.log("Bir süre disari cikma");
//       break;
//   default:
//       console.log("Bilinmeyen hava durumu:" , hava);
// }

// ----------------- HESAP MAKİNESİ -----------------------

// let islem = function(a, b, operator) {
//     switch(operator) {
//         case 'topla':
//             return a + b;
//         break;
//         case 'cikar':
//             return a - b;
//         break;
//         case 'carp':
//             return a * b;
//         break;
//         case 'bol':
//             return a / b;
//         break;
//         default:
//             return 'Tanimlanmamis islem';
//         break;
//     }
// };
// console.log(islem(23, 14, 'topla'));  // 37
// console.log(islem(10, 3, 'carp'));     // Tanimlanmamis islem

