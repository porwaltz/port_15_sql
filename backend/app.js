let express = require('express')
let mysql = require('mysql')
let app = express()

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'River015.',
    database: 'bd_tp_integrador',
    port: 3306
 });

// let conexion = mysql.createConnection({
//     host: 'localhost',
//     database: '',
//     user: 'nicotest',
//     password: 'test2021'
// })

// conexion.connect((error) => {
//     if (error){ throw error }
//     else { console.log('CONEXION EXITOSA')}
// })
// conexion.end()

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
   
    connection.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Conexion correcta.');
    }
    
    let consulta ="select nombre,apellido from usuario"
    connection.query(consulta,function(err,results,fields){
        if(err) throw err;
        console.log('¡No hubo errores!');
        response.json(results)    
        connection.end();         
    })
});
    // response.json(usuarios)
})

app.get('/estadisticas', (request, response) => {
    
    connection.connect(function(error){
        if(error){
            throw error;
        }else{
            console.log('Conexion correcta.');
        }
        
        let encuestasUsuarios ="select d.usuario_logeado,e.resumen_descarga,e.resumen_negativo,e.resumen_positivo,e.puntaje_global\
        from descarga as d\
        inner join encuesta as e\
        on e.id_descarga=d.id_descarga;"
        connection.query(encuestasUsuarios,function(err,results,fields){
            if(err) throw err;
            console.log('¡No hubo errores!');
            response.json(results)    
            connection.end();         
        })
    })
    //response.json(descargas)
})

app.get('/estadisticas/usuario', (request, response) => {
    
    connection.connect(function(error){
        if(error){
            throw error;
        }else{
            console.log('Conexion correcta.');
        }
        
        let encuestasUsuarios ="select d.usuario_logeado,e.resumen_descarga,e.resumen_negativo,e.resumen_positivo,e.puntaje_global\
        from descarga as d\
        inner join encuesta as e\
        on e.id_descarga=d.id_descarga;"
        connection.query(encuestasUsuarios,function(err,results,fields){
            if(err) throw err;
            console.log('¡No hubo errores!');
            response.json(results)    
            connection.end();         
        })
    })
    //response.json(descargas)
})

app.get('/estadisticas/resumen', (request, response) => {
    
    connection.connect(function(error){
        if(error){
            throw error;
        }else{
            console.log('Conexion correcta.');
        }
        
        let encuestasUsuarios ="select d.usuario_logeado,e.resumen_descarga,e.resumen_negativo,e.resumen_positivo,e.puntaje_global\
        from descarga as d\
        inner join encuesta as e\
        on e.id_descarga=d.id_descarga;"
        connection.query(encuestasUsuarios,function(err,results,fields){
            if(err) throw err;
            console.log('¡No hubo errores!');
            response.json(results)    
            connection.end();         
        })
    })
    //response.json(descargas)
})

app.get('/estadisticas/positivo', (request, response) => {
    
    connection.connect(function(error){
        if(error){
            throw error;
        }else{
            console.log('Conexion correcta.');
        }
        
        let encuestasUsuarios ="select d.usuario_logeado,e.resumen_descarga,e.resumen_negativo,e.resumen_positivo,e.puntaje_global\
        from descarga as d\
        inner join encuesta as e\
        on e.id_descarga=d.id_descarga;"
        connection.query(encuestasUsuarios,function(err,results,fields){
            if(err) throw err;
            console.log('¡No hubo errores!');
            response.json(results)    
            connection.end();         
        })
    })
    //response.json(descargas)
})

app.get('/estadisticas/negativo', (request, response) => {
    
    connection.connect(function(error){
        if(error){
            throw error;
        }else{
            console.log('Conexion correcta.');
        }
        
        let encuestasUsuarios ="select d.usuario_logeado,e.resumen_descarga,e.resumen_negativo,e.resumen_positivo,e.puntaje_global\
        from descarga as d\
        inner join encuesta as e\
        on e.id_descarga=d.id_descarga;"
        connection.query(encuestasUsuarios,function(err,results,fields){
            if(err) throw err;
            console.log('¡No hubo errores!');
            response.json(results)    
            connection.end();         
        })
    })
    //response.json(descargas)
})

app.get('/estadisticas/puntaje', (request, response) => {
    
    connection.connect(function(error){
        if(error){
            throw error;
        }else{
            console.log('Conexion correcta.');
        }
        
        let encuestasUsuarios ="select d.usuario_logeado,e.resumen_descarga,e.resumen_negativo,e.resumen_positivo,e.puntaje_global\
        from descarga as d\
        inner join encuesta as e\
        on e.id_descarga=d.id_descarga;"
        connection.query(encuestasUsuarios,function(err,results,fields){
            if(err) throw err;
            console.log('¡No hubo errores!');
            response.json(results)    
            connection.end();         
        })
    })
    //response.json(descargas)
})

app.put('/alta',(request, response) => {
    //connexion con mysql
    //crear la query insert
    //ejecutarla
})