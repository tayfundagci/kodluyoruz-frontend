// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
// Object - Key Value
// [key1:1, key2:2, key3:3, key4:4]

//süslü parantezler object oldugunu belirtir.
let laptop1 = {
    brand: "Apple", 
    model: "Macbook Pro",
    "2kg": 2,
    modelName: "Macbook Pro",
    model_name: "Macbook Pro",
    //model-name: "Macbook Pro" HATALI TİRE
} 

console.log(laptop1)

// Dogru anahtar bilgisi oluşturmak
console.log(laptop1.brand, laptop1["brand"])
console.log(laptop1.model, laptop1["model"])
console.log(laptop1["2kg"])

// Anahtar bilgisine yeni değer eklemek
laptop1.brand = "Mac"
console.log(laptop1)
laptop1["brand"] = "Mac1"   
console.log(laptop1)


// Yeni bilgi eklemek
laptop1.version = "10.15.7"
console.log(laptop1)

// Anahtar bilgisine ulaşmak (keys)
keys = Object.keys(laptop1)
console.log(keys)
console.log(Object.keys(laptop1))

keys.forEach(keyInfo => {
    console.log(keyInfo)
    console.log(laptop1[keyInfo])
})

// Deger bilgilerine ulasmak (values)
console.log(
    Object.values(laptop1)
)

let values = Object.values(laptop1)

values.forEach(value => {
    console.log("value: ", value)
})

let settings = {
    password: 1234,
    userName: 'user1'
}