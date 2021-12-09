let products;


try{
    products.forEach(item => console.log(item));
} catch(error) {
    console.log("error: ",error)
    products = [1, 2, 3]
    products.forEach(item => console.log(item));
}

console.log("hata yönetimi duzgun calisiyor")

let info = "kodluyoruz"
console.log(info)
