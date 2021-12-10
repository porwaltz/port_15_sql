const request = new XMLHttpRequest()
const url = "http://localhost:3000/usuarios"
localStorage.setItem("busqueda", "")

request.open('GET', url)
request.send()


request.addEventListener("readystatechange", () =>{
    let user_string = ''
    if(request.readyState === 4){
        if(request.status == 200){
            // const jason = JSON.parse(request.response).users.map(e => e.Nombre + ' ' + e.Apellido)
            const jason = JSON.parse(request.response)
            
            jason.forEach( e => {
                // userId=e.id_usuario 
                user_string += `<div class="unUsuario ">`
                user_string += `
                <div>
                    <p>${e.nombre}<br>${e.apellido}</p>
                </div>
                <div>
                    <i class="fas fa-pencil-alt m-2" onClick="editarUsuario(${e.id_usuario})">
                    </i><i class="fas fa-trash m-2" onClick="eliminarUsuario(${e.id_usuario})"></i>
                </div>
                `
                user_string +='</div>'
            })
            console.log(request.response)
            document.getElementById("usuarios").innerHTML = user_string
        }
        else{
            document.getElementById("usuarios").innerHTML = "Error " + request.status
        }
    }
    
})

const editarUsuario=(id_usuario)=>{
    console.log("Voy a editar al usuario: "+id_usuario)

    // window.location.href = "./index.html";
    
}

const eliminarUsuario = (id_usuario)=>{
    console.log("Voy a editar al usuario: "+ id_usuario)

    const requestEliminarUser = new XMLHttpRequest()
    const urlEliminar = "http://localhost:3000/usuarioEliminar"

    requestEliminarUser.open('PUT', urlEliminar)
    requestEliminarUser.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
    let body = JSON.stringify({ userEliminar : id_usuario })
    console.log(body)
    requestEliminarUser.send(body)
    requestEliminarUser.addEventListener("readystatechange", () =>{
        if(requestEliminarUser.readyState === 4){
            console.log(requestEliminarUser.status)
            if(requestEliminarUser.status == 200){
                console.log("se hizo todo")
                location.reload()
            }
        }
    })
}



/*     requestEliminarUser.onreadystatechange=()=>{
        if(requestEliminarUser.readyState==XMLHttpRequest.DONE){
            console.log("se hizo todo")
            //location.reload()
        }
    }    */
