const datauserBtn = document.getElementById('ejebtn')
const content = document.getElementById('content')

//Monstrar por pantalla la lista de usuarios
axios.get ('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        const {data} = res
        console.log (data)
    })

 .catch((err) => console.error(err))


//Crear una variable global users y que haga peticion axios
let usersGlobal = []
axios.get ('https://jsonplaceholder.typicode.com/users')
.then((res) => {
    const {data} = res
    usersGlobal = data
})
.catch((err) => console.error(err))

//Los items se montraran por pantalla con el boton
const datauser = () => {
    usersGlobal.forEach((item)=> {
    content.innerHTML +=
    `<h1>${item.id}</h1>
    <h2>${item.name}</h2>
    <p>${item.username}</p>
    <p>${item.email}</p>`
    })
}

//Boton para monstrar la funcion datauser
datauserBtn.addEventListener('click', datauser)


      


