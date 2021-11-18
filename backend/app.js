let express = require('express')
let mysql = require('mysql')
let app = express()

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123Us456$',
    database: 'bd_tp_integrador',
    port: 3306
 })

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.listen(3000)
connection.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Conexion correcta.');
    }


app.get('/usuarios', (request, response) => {
    
    let consulta ="select nombre,apellido from usuario"
    connection.query(consulta,function(err,results,fields){
        if(err) throw err;
        console.log('¡No hubo errores!');
        response.json(results) 
        //connection.end()   
        })
    });
})

app.get('/estadisticas', (request, response) => {
        
    let encuestasUsuarios ="select d.usuario_logeado,e.resumen_descarga,e.resumen_negativo,e.resumen_positivo,e.puntaje_global\
    from descarga as d\
    inner join encuesta as e\
    on e.id_descarga=d.id_descarga;"
    connection.query(encuestasUsuarios,function(err,results,fields){
        if(err) throw err;
        console.log('¡No hubo errores!');
        response.json(results) 
        //connection.end()   
    })
})

app.get('/estadisticas/usuario', (request, response) => {
        
    let encuestasUsuarios ="select d.usuario_logeado,e.resumen_descarga,e.resumen_negativo,e.resumen_positivo,e.puntaje_global\
    from descarga as d\
    inner join encuesta as e\
    on e.id_descarga=d.id_descarga\
    order by d.usuario_logeado;"
    connection.query(encuestasUsuarios,function(err,results,fields){
        if(err) throw err;
        console.log('¡No hubo errores!');
        response.json(results)            
    })
})
//response.json(descargas)


app.get('/estadisticas/resumen', (request, response) => {
        
    let encuestasUsuarios ="select d.usuario_logeado,e.resumen_descarga,e.resumen_negativo,e.resumen_positivo,e.puntaje_global\
    from descarga as d\
    inner join encuesta as e\
    on e.id_descarga=d.id_descarga\
    order by e.resumen_descarga;"
    connection.query(encuestasUsuarios,function(err,results,fields){
        if(err) throw err;
        console.log('¡No hubo errores!');
        response.json(results)            
    })
})
//response.json(descargas)

app.get('/estadisticas/positivo', (request, response) => {
        
    let encuestasUsuarios ="select d.usuario_logeado,e.resumen_descarga,e.resumen_negativo,e.resumen_positivo,e.puntaje_global\
    from descarga as d\
    inner join encuesta as e\
    on e.id_descarga=d.id_descarga\
    order by e.resumen_positivo;"
    connection.query(encuestasUsuarios,function(err,results,fields){
        if(err) throw err;
        console.log('¡No hubo errores!');
        response.json(results)    
    })
})
//response.json(descargas)

app.get('/estadisticas/negativo', (request, response) => {
        
    let encuestasUsuarios ="select d.usuario_logeado,e.resumen_descarga,e.resumen_negativo,e.resumen_positivo,e.puntaje_global\
    from descarga as d\
    inner join encuesta as e\
    on e.id_descarga=d.id_descarga\
    order by e.resumen_negativo;"
    connection.query(encuestasUsuarios,function(err,results,fields){
        if(err) throw err;
        console.log('¡No hubo errores!');
        response.json(results)    
    })
})
//response.json(descargas)


app.get('/estadisticas/puntaje', (request, response) => {
        
    let encuestasUsuarios ="select d.usuario_logeado,e.resumen_descarga,e.resumen_negativo,e.resumen_positivo,e.puntaje_global\
    from descarga as d\
    inner join encuesta as e\
    on e.id_descarga=d.id_descarga\
    order by e.puntaje_global;"
    connection.query(encuestasUsuarios,function(err,results,fields){
        if(err) throw err;
        console.log('¡No hubo errores!');
        response.json(results)    
    
    })
})


app.post('/alta', (request, response) => {
    connection.query(request.body.nuevo, function(err,results,fields){
        if(err) throw err;
        console.log('results')
        response.send(results)    
    
    })

})

