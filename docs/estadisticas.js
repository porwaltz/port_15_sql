
const request = new XMLHttpRequest()
const url = "http://localhost:3000/estadisticas"

request.open('GET', url)
request.send()


request.addEventListener("readystatechange", () =>{
    let user_string = ''
    if(request.readyState === 4){
        if(request.status == 200){
            //const jason = JSON.parse(request.response).users.map(e => e.Nombre + ' ' + e.Apellido)
            const jason = JSON.parse(request.response).downloads
            const total = jason.length
            document.getElementById('total').innerHTML = `<i class="fas fa-search"></i> Total: ${total}`
            user_string += `
                        <div class="grid-item grid-h"><p>id</p></div>
                        <div class="grid-item grid-h"><p>Usuario</p></div>
                        <div class="grid-item grid-h"><p>Resumen</p></div>
                        <div class="grid-item grid-h"><p>Positivo</p></div>
                        <div class="grid-item grid-h"><p>Negativo</p></div>
                        <div class="grid-item grid-h"><p>Puntaje</p></div>
                    `
            jason.forEach( e => {
                user_string += `
                        <div class="grid-item"><p>${e.id}</p></div>
                        <div class="grid-item"><p>${e.Usuario}</p></div>
                        <div class="grid-item"><p>${e.Resumen}</p></div>
                        <div class="grid-item"><p>${e.Positivo}</p></div>
                        <div class="grid-item"><p>${e.Negativo}</p></div>
                        <div class="grid-item"><p>${e.Puntaje}</p></div>
                    `
            })
            document.getElementById("resultados").innerHTML = user_string
        }
        else{
            document.getElementById("resultados").innerHTML = "Error " + request.status
        }
    }
    
})