localStorage.setItem("busqueda", "")

const alta = () => {
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const fecha = document.getElementById("fecha").value
    const contra = document.getElementById("contra").value.toUpperCase()
    const validar = [nombre, apellido, fecha, contra].some(e => e == '')
    if(validar){
        alert("Llene todos los campos")
    }

    query = `insert into usuario(fec_nacimiento, contrasenia, apellido, nombre)
                values("${fecha}", "${cifrar(contra)}", "${apellido}", "${nombre}");`
    
    const request = new XMLHttpRequest()
    const url = "http://localhost:3000/alta"


    request.open('POST', url)
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
    let body = JSON.stringify({ nuevo : query })
    request.send(body)
    
    request.addEventListener("readystatechange", () =>{
        //let user_string = ''
        if(request.readyState === 4){
            if(request.status == 200){
                console.log(request.response)
                alert("Usuario creado exitosamente")
                location.reload(false)
            }
            else {
                alert("algo salio mal")
            }
        }
    })

    
}

const cifrar = (str, val = 13) => {

    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let current 
    let caesars = ""

    for(let i = 0; i < str.length; i++){
        if(letters.includes(str[i])){
            current = str[i].charCodeAt(0) + val
            if (current > 90){
                current -= 26
                }
            else if(current < 65){
                current +=26
                }
            caesars += String.fromCharCode(current)
            }
        else{
            caesars += str[i]
        }
    }
    return caesars

}
