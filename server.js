const express = require('express');
const app = express();
var cors = require('cors')
const PORT = process.env.PORT || 3000;
app.use(express.static(__dirname+'/build'));
app.use(express.json());
app.get('/',(req,res)=>{
  //  res.render(__dirname+'/build/index.html')
  res.send("Bienvenido")
})
let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  next();
}
app.use(allowCrossDomain);
app.use(cors());

//Routes
app.use(require('./routes/productList'));
app.use(require('./routes/personList'));
app.use(require('./routes/ventas'));
app.use(require('./routes/detallesVenta'));
app.use(require('./routes/Compras'));
app.use(require('./routes/detalleCompras'));
app.use(require('./routes/usuarios'));
app.use(require('./routes/empresa'));


app.listen(PORT,()=>{
    console.log('runinng')
})

