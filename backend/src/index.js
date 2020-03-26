const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query parans: Parametros enviados na rota após o simbolo ? "Filtros, Paginação"
  * Route parans: Parametros utilizados para identicar recursos 
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

/**
 * SQL: MySql, SQLite, PostgreeSQL
 * NoSQL: MongoDB, CouchDB, etc
 */




app.listen(3333);

