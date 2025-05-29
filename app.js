//console.log("hello world!!!");

const express = require ('express'); // express = framework para facilitar criação web

const app = express(); //app é o servidor web

app.get ("/", function(req,res){     // efetuando requisição tipo get ,  / = na url , req = requisição , res= resposta
    res.write("hello word !!");
    res.end();                          // finalizar resposta
});

app. listen(8080); // 
