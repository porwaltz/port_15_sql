
const request = new XMLHttpRequest()
const url = "http://localhost:3000/usuarios"


request.open('GET', url)
request.send()


request.addEventListener("readystatechange", () =>{
    let user_string = ''
    if(request.readyState === 4){
        if(request.status == 200){
            //const jason = JSON.parse(request.response).users.map(e => e.Nombre + ' ' + e.Apellido)
            const jason = JSON.parse(request.response).users
            
            jason.forEach( e => {
                user_string += '<div class="unUsuario">'
                user_string += `
                <div>
                    <p>${e.Nombre}<br>${e.Apellido}</p>
                </div>
                <div>
                    <i class="fas fa-pencil-alt m-2">
                    </i><i class="fas fa-trash m-2"></i>
                </div>
                `
                user_string +='</div>'
            })
            document.getElementById("usuarios").innerHTML = user_string
        }
        else{
            document.getElementById("usuarios").innerHTML = "Error " + request.status
        }
    }
    
})