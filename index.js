const express = require('express');
const config = require('./config');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const fakeHMR = require('./fake-hmr');

const compiler = webpack(webpackConfig);

const watching = compiler.watch({
  // Example watchOptions
  aggregateTimeout: 300,
  poll: undefined
}, (err, stats) => { // Stats Object
  console.log(stats.toString({
    chunks: false,  // Makes the build much quieter
    colors: true    // Shows colors in the console
  }))
  if (stats.hasErrors()) {
    console.log('didn\' t build')
    return;
  }
  console.log('built');
  fakeHMR.built();
});

const app = express();
fakeHMR.config({ app });
app.use(express.static('public'));

// require('./webpackRunner');


//get,post,put,delete

//GET
app.get('/', (req, res) => {
  res.json({
    "pessoas": 
    [
      {"nome": "Usuario 1", "setor": "Gerencia de processos", "privilégio": "Usuario"},
      {"nome": "Usuario 2", "setor": "Diretoria de processos", "privilégio": "Usuario"},
      {"nome": "Usuario 3", "setor": "Diretoria de gestão de pessoas", "privilégio": "Usuario"},
      {"nome": "Usuario 4", "setor": "Gerencia de banco de dados", "privilégio": "Administrador"},
      {"nome": "Usuario 5", "setor": "Diretoria de infraestrutura de rede", "privilégio": "Administrador"}
    ]  
  })
});
app.get('/pessoas', (req, res) => {
  res.json({"nome" : req.query.nome})
});

//DELETE
app.delete('/pessoas/:id', (req, res) => {
  res.json({  id : req.params.id});
});

//PUT
app.put('/pessoas/:nome', (req, res) => {
  res.json({ nome : req.params.nome });
});

//POST
app.use(express.json());

app.post('/pessoas', (req, res) => {
  res.json(req.body);
});



app.listen(config.PORT, function () {
  console.log(`App currently running; navigate to localhost:${config.PORT} in a web browser.`);
});
