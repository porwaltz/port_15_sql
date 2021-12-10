let express = require('express')
let mysql = require('mysql')
//var cors = require('cors')
let app = express()

let connection = mysql.createConnection({
    multipleStatements: true,
    host: 'localhost',
    user: 'root',
    password: '1122334410',
    //password: 'River015.',
    database: 'bd_tp_integrador',
    port: 3306
 })

//app.use(cors())
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
    
    let consulta ="select id_usuario,nombre,apellido from usuario where activo = 1"
    connection.query(consulta,function(err,results,fields){
        if(err) throw err;
        console.log('¡No hubo errores!');
        response.json(results) 
        //connection.end()   
        })
    });
})

app.post('/usuarioPorId', (request, response) => {
    
    let consulta =`select id_usuario,nombre,apellido from usuario where id_usuario=${request.body.id_usuario}`
    connection.query(consulta,function(err,results,fields){
        if(err) throw err;
        console.log('¡No hubo errores!');
        response.json(results) 
        //connection.end()   
    })
});

app.put('/usuarioEliminar', (request, response) => {
    console.log("entro al metodo")
    let  deleteFromUsuario=`update usuario set activo = 0 where id_usuario = ${request.body.userEliminar};`
    
    connection.query(deleteFromUsuario,function(err,results,fields){
        if(err) throw err;
        console.log('¡Salio todo bien de usuario!');
        // response.json(results) 
        //connection.end()   
    })
    console.log('Salio todo piola')
    response.end()
});

app.post('/estadisticas', (request, response) => {
    console.log(request.body)
    let orden = ''
    if(request.body.nuevo != '' && request.body.nuevo != null){
        orden = `where d.usuario_logeado like '%${request.body.nuevo}%'`
    }
    let encuestasUsuarios =`select d.usuario_logeado,e.resumen_descarga,e.resumen_negativo,e.resumen_positivo,e.puntaje_global
    from descarga as d
    inner join encuesta as e
    on e.id_descarga=d.id_descarga ${orden};`
    connection.query(encuestasUsuarios,function(err,results,fields){
        if(err) throw err;
        console.log('¡No hubo errores!');
        response.json(results) 
        //connection.end()   
    })
})

app.post('/estadisticas/usuario', (request, response) => {
    console.log(request.body)
    let orden = ''
    if(request.body.nuevo != '' && request.body.nuevo != null){
        orden = `where d.usuario_logeado like '%${request.body.nuevo}%'`
    }
    let encuestasUsuarios =`select d.usuario_logeado,e.resumen_descarga,e.resumen_negativo,e.resumen_positivo,e.puntaje_global
    from descarga as d
    inner join encuesta as e
    on e.id_descarga=d.id_descarga ${orden} order by d.usuario_logeado;`
    connection.query(encuestasUsuarios,function(err,results,fields){
        if(err) throw err;
        console.log('¡No hubo errores!');
        response.json(results)            
    })
})
//response.json(descargas)


app.post('/estadisticas/resumen', (request, response) => {
    console.log(request.body.nuevo)
    let orden = ''
    if(request.body.nuevo != '' && request.body.nuevo != null){
        orden = `where d.usuario_logeado like '%${request.body.nuevo}%'`
    }
    let encuestasUsuarios =`select d.usuario_logeado,e.resumen_descarga,e.resumen_negativo,e.resumen_positivo,e.puntaje_global
    from descarga as d
    inner join encuesta as e
    on e.id_descarga=d.id_descarga ${orden} order by e.resumen_descarga;`
    connection.query(encuestasUsuarios,function(err,results,fields){
        if(err) throw err;
        console.log('¡No hubo errores!');
        response.json(results)            
    })
})
//response.json(descargas)

app.post('/estadisticas/positivo', (request, response) => {
    console.log(request.body.nuevo)
    let orden = ''
    if(request.body.nuevo != '' && request.body.nuevo != null){
        orden = `where d.usuario_logeado like '%${request.body.nuevo}%'`
    }
    let encuestasUsuarios =`select d.usuario_logeado,e.resumen_descarga,e.resumen_negativo,e.resumen_positivo,e.puntaje_global
    from descarga as d
    inner join encuesta as e
    on e.id_descarga=d.id_descarga ${orden} order by e.resumen_positivo;`
    connection.query(encuestasUsuarios,function(err,results,fields){
        if(err) throw err;
        console.log('¡No hubo errores!');
        response.json(results)    
    })
})
//response.json(descargas)

app.post('/estadisticas/negativo', (request, response) => {
    console.log(request.body.nuevo)
    let orden = ''
    if(request.body.nuevo != '' && request.body.nuevo != null){
        orden = `where d.usuario_logeado like '%${request.body.nuevo}%'`
    }
    let encuestasUsuarios =`select d.usuario_logeado,e.resumen_descarga,e.resumen_negativo,e.resumen_positivo,e.puntaje_global
    from descarga as d
    inner join encuesta as e
    on e.id_descarga=d.id_descarga ${orden} order by e.resumen_negativo;`
    connection.query(encuestasUsuarios,function(err,results,fields){
        if(err) throw err;
        console.log('¡No hubo errores!');
        response.json(results)    
    })
})
//response.json(descargas)


app.post('/estadisticas/puntaje', (request, response) => {
    console.log(request.body.nuevo)
    let orden = ''
    if(request.body.nuevo != '' && request.body.nuevo != null){
        orden = `where d.usuario_logeado like '%${request.body.nuevo}%'`
    }
    let encuestasUsuarios =`select d.usuario_logeado,e.resumen_descarga,e.resumen_negativo,e.resumen_positivo,e.puntaje_global
    from descarga as d
    inner join encuesta as e
    on e.id_descarga=d.id_descarga ${orden} order by e.puntaje_global;`
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

