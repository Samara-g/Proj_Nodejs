//Requiring module
const express = require('express');

//Creating express object
const app = express();

//Handing GET request
app.get('/',(req,res)=>{
    res.send('Essa é uma frase'
      + 'de exemplo')
    res.end()
})

//Handing GET request
app.get('/retorno',(req,res)=>{
  res.send('Sou aluna:'
    + 'do IFPE')
  res.end()
})

//Port Number
const PORT =process.env.PORT ||5000;

//Server Setup
app.listen(PORT,console.log(`Server started on port ${PORT}`));