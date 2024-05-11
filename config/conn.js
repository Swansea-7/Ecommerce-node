//requerimos el módulo de conexión a la base.
const mysql      	= require('mysql');
//Creamos la variable connection para lograr la conexion
//Dentro de la función createConnection, agregamos los datos de acceso
const connection 	= mysql.createConnection({

	host     : "localhost",
	user     : "root",
	password : "",
	port	 : "3306",
	database : "ecommerce",
	multipleStatements: true // Habilitar multi-statements
});
//con la función connect sabremos si se pudo conectar bien y lo imprimimos en pantalla
connection.connect(function(err){

	if (err) {

		console.error("Error al conectar a Data Base ::", err.stack);
		return;
	}
	console.log("Conectado a Data Base con Id. :: ", connection.threadId)
});
//la función query va a recibir la consulta que queremos hacer a la base
let query = (sql) => {

	//va a devolver los datos solicitados o un error
	return new Promise( (resolve, reject) => {

		connection.query(`${sql}`, function (error, results, fields) {

		  if (error) {

		  	resolve(JSON.parse(JSON.stringify(error)));
		  }else {

		  	resolve(results);
		  }
		});
	})
}
//a conn le agregamos query para poder usarlo fuera
let conn = {

	query: query
}
//exportamos conn
module.exports = conn
