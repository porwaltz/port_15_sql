if(localStorage.cambio == '0'){
    localStorage.setItem('orden', '')
}
else{
    localStorage.setItem('cambio', '0')
}
const request = new XMLHttpRequest()
const url = "http://localhost:3000/estadisticas"
request.open('GET', url + localStorage.orden)
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
                            <a href="estadisticas.html" onclick="ordenar('/resumen')">Resumen</a>
                        </p></div>
                        <div class="grid-item grid-h"><p>
                            <a href="estadisticas.html" onclick="ordenar('/positivo')">Positivo</a>
                        </p></div>
                        <div class="grid-item grid-h"><p>
                            <a href="estadisticas.html" onclick="ordenar('/negativo')">Negativo</a>
                        </p></div>
                        <div class="grid-item grid-h"><p>
                            <a href="estadisticas.html" onclick="ordenar('/puntaje')">Puntaje</a>
                        </p></div>
                    `
            jason.forEach( e => {
                user_string += `

                        <div class="grid-item grid-user"><p>${e.usuario_logeado}</p></div>
                        <div class="grid-item grid-user"><p>${e.resumen_descarga}</p></div>
                        <div class="grid-item grid-user"><p>${e.resumen_positivo}</p></div>
                        <div class="grid-item grid-user"><p>${e.resumen_negativo}</p></div>
                        <div class="grid-item grid-user"><p>${e.puntaje_global}</p></div>
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
    localStorage.setItem('cambio','1')
    localStorage.setItem('orden',ruta)
}