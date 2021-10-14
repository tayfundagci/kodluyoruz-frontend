// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

// for ([baslangıçAtaması]; [koşulİfadesi]; [arttırımİfadesi]) {
// yapilacak islem
// }

let users = ["Lorem", "Ipsum", "Dolor", ]

// for (index = 0; index < 10; index++) {
//     console.log(index)
// }


// let index = 0
// for (; index < 10; index++) {
//     console.log(index)
// }

const userListDOM = document.querySelector('#userList')

for (index = 0; index < users.length; index++) {
    const liDOM = document.createElement('li')
    liDOM.innerHTML = users[index]
    userListDOM.appendChild(liDOM)
}