let express = require('express')
let app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.listen(3000)



let usuarios = {
    "users": [
        {"Nombre": "Edward", "Apellido": "Scissorhands"}, 
        {"Nombre": "Jack", "Apellido": "Skeleton"},
        {"Nombre": "Sweeny", "Apellido": "Tood"}
    ]
}

let descargas = {
    "downloads": [
        {"id": 1, "Usuario": "Edward Scissorhands", "Resumen": "buena", "Positivo": "fue rapido", "Negativo": "tenia virus", "Puntaje": 5},
        {"id": 2, "Usuario": "Jack Skeleton", "Resumen": "muy buena", "Positivo": "fue rapido", "Negativo": "ya paso Halloween", "Puntaje": 8},
        {"id": 3, "Usuario": "Sweeny Tood", "Resumen": "buena", "Positivo": "se escucha bien", "Negativo": "tardo un poco", "Puntaje": 6}
    ]
}



app.get('/hello', (request, response) => {
    let resultado_query = exec(query)
    response.send('resultado_query')
})

app.get('/usuarios', (request, response) => {
    //connexion con mysql
    //crear la query Select nombre, apellido from Usuarios
    //ejecutarla
    response.json(usuarios)
})

app.get('/estadisticas', (request, response) => {
    response.json(descargas)
})

app.put('/alta',(request, response) => {
    //connexion con mysql
    //crear la query insert
    //ejecutarla
})