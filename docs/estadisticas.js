const request = new XMLHttpRequest()
const url = "http://localhost:3000/estadisticas"
request.open('GET', url)
request.send()


request.addEventListener("readystatechange", () =>{
    let user_string = ''
    if(request.readyState === 4){
        if(request.status == 200){
            //const jason = JSON.parse(request.response).users.map(e => e.Nombre + ' ' + e.Apellido)
            const jason = JSON.parse(request.response)
            const total = jason.length
            document.getElementById('total').innerHTML = `<i class="fas fa-search"></i> Total: ${total}`
            user_string += `

                        <div class="grid-item grid-h"><p>
                            <a href="estadisticas.html" onclick="ordenar()">Usuario</a>
                        </p></div>
                        <div class="grid-item grid-h"><p>
                            <a href="estadisticas.html" onclick="ordenar()">Resumen</a>
                        </p></div>
                        <div class="grid-item grid-h"><p>
                            <a href="estadisticas.html" onclick="ordenar()">Positivo</a>
                        </p></div>
                        <div class="grid-item grid-h"><p>
                            <a href="estadisticas.html" onclick="ordenar()">Negativo</a>
                        </p></div>
                        <div class="grid-item grid-h"><p>
                            <a href="estadisticas.html" onclick="ordenar()">Puntaje</a>
                        </p></div>
                    `
            jason.forEach( e => {
                user_string += `

                        <div class="grid-item"><p class="grid-user">${e.usuario_logeado}</p></div>
                        <div class="grid-item"><p class="grid-user">${e.resumen_descarga}</p></div>
                        <div class="grid-item"><p class="grid-user">${e.resumen_positivo}</p></div>
                        <div class="grid-item"><p class="grid-user">${e.resumen_negativo}</p></div>
                        <div class="grid-item"><p class="grid-user">${e.puntaje_global}</p></div>
                    `
            })
            document.getElementById("resultados").innerHTML = user_string
        }
        else{
            document.getElementById("resultados").innerHTML = "Error " + request.status
        }
    }
    
})

const ordenar = (ruta = '') => {
    true
}