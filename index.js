const express = require('express');
const config = require('./config');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const fakeHMR = require('./fake-hmr');
const clienteController = require('./controllers/ClienteController');
const produtoController = require('./controllers/ProdutoController');
const mongoose = require('mongoose');
const cors = require('cors');
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
    console.log('didnt build');
    return;
  }
  console.log('built');
  fakeHMR.built();
});

const app = express();
fakeHMR.config({ app });
app.use(express.static('public'));

// require('./webpackRunner');

mongoose.connect('mongodb+srv://dwmdb:dwmdb@cluster0.rik3k.mongodb.net/dwmdb?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(cors());
app.use(express.json());
//get,post,put,delete
//Clientes
app.get('/cliente', clienteController.show);
app.get('/clienteNome', clienteController.indexNome);
app.get('/clienteEmail', clienteController.indexEmail);
app.get('/clienteEstado', clienteController.indexEstado);
app.get('/clienteCidade', clienteController.indexCidade);
app.get('/clienteCep', clienteController.indexCep);
app.get('/clienteEndereco', clienteController.indexEndereco);
app.delete('/cliente/:id', clienteController.destroy);
app.put('/cliente/:id', clienteController.update);
app.post('/cliente', clienteController.store);
//Produtos
app.get('/produto', produtoController.show);
app.get('/produtoNome', produtoController.indexNome);
app.get('/produtoCategoria', produtoController.indexCategoria);
app.delete('/produto/:id', produtoController.destroy);
app.put('/produto/:id', produtoController.update);
app.post('/produto', produtoController.store);



app.listen(config.PORT, function () {
  console.log(`App currently running; navigate to localhost:${config.PORT} in a web browser.`);
});
