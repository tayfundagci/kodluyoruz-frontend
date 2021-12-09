// ilk fonksiyonumuzu tanımlamak

function hello_world() {
    console.log("hello world")
}

function hello() {
    console.log("merhaba")
    hello_world()
}



function userCheck () {
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
}



hello() //calistir
hello() //calistir
hello() //calistir


