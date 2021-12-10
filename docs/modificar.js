localStorage.setItem("busqueda", "")

const requestGet = new XMLHttpRequest()
const url = "http://localhost:3000/usuarioPorId"
localStorage.setItem("busqueda", "")
requestGet.open('POST', url)
requestGet.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
let body = JSON.stringify({ el_id : localStorage.getItem("usuarioEditar") })
requestGet.send(body)


requestGet.addEventListener("readystatechange", () =>{
    if(requestGet.readyState === 4){
        if(requestGet.status == 200){
            // const jason = JSON.parse(request.response).users.map(e => e.Nombre + ' ' + e.Apellido)
            const jason = JSON.parse(requestGet.response)
            console.log(jason)
            const formulario = `
                <h2 class="p-2">Modificacion de usuario <i class="fas fa-address-card"></i></h2>
                <form action="" class="p-3">
                    <p>Nombre</p>
                    <input type="text" value="${jason[0].nombre}" id="nombre">
                    <p>apellido</p>
                    <input type="text" value="${jason[0].apellido}" id="apellido">
                    <p>Fecha de nacimiento</p>
                    <input type="date" value="${jason[0].fec_nacimiento.slice(0, 10)}" id="fecha">
                </form>
                <div id="buttons">
                    <button class="m-2" onclick="location.href = './usuarios.html'">CANCELAR</button>
                    <button class="m-2" onclick="modificar()">GUARDAR</button>
                </div>
            `
            
            console.log(requestGet.response)
            document.getElementById("formulario").innerHTML = formulario
        }
        else{
            document.getElementById("formulario").innerHTML = "Error " + requestGet.status
        }
    }
    
})


const modificar = () => {
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const fecha = document.getElementById("fecha").value
    const validar = [nombre, apellido, fecha].some(e => e == '')
    if(validar){
        alert("Llene todos los campos")
    }

    query = `update usuario set fec_nacimiento = "${fecha}", apellido = "${apellido}", nombre = "${nombre}" where id_usuario= ${localStorage.getItem("usuarioEditar")};`
    
    const request = new XMLHttpRequest()
    const url = "http://localhost:3000/alta"


    request.open('POST', url)
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
    let body = JSON.stringify({ nuevo : query })
    request.send(body)
    
    request.addEventListener("readystatechange", () =>{
        if(request.readyState === 4){
            if(request.status == 200){
                console.log(request.response)
                alert("Usuario modificado exitosamente")
                location.href = "./usuarios.html"
            }
            else {
                alert("algo salio mal")
            }
        }
    })

    
}