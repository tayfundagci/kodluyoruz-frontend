function hello(firstName) {
    console.log(`Merhaba ${firstName}`)
}

hello("tayfun")



const helloFuncV1 = (firstName) => 
{ 
    console.log(`Merhaba ${firstName}`)
}
helloFuncV1("helloFuncV1")



const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`)
helloFuncV2("helloFuncV2")
// bir parametre ve bir dönüş işlemi var ise, parantez ile süslü paranteze gerek yok


const helloFuncV3 = (firstName, lastName) => 
console.log(`Merhaba ${firstName} ${lastName}`)
helloFuncV3("helloFuncV3", "Last Name Info")



const helloFuncV4 = (firstName, lastName) => 
{
    let info = `Merhaba ${firstName} ${lastName}`
    console.log(info)
    return info
}
helloFuncV4("helloFuncV4", "Other Info")
