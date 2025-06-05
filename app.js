//console.log("hello world!!!");

const express = require ('express'); // express = framework para facilitar criação web
const app = express(); //app é o servidor web
const mysql = require ('mysql2');

const conexao = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'senac',
    port: 3306,
    database: 'ecommerce_pc'
});

conexao.connect(function (erro){
    if(erro){
        console.error (' 👾 Erro ao conectar ao banco de dados', erro);
        return;
    }
    console.log ('🤓 conexão com o banco de dados estabelecida com sucesso !');
    });


app.get ("/", function(req,res){     // efetuando requisição tipo get ,  / = na url , req = requisição , res= resposta
    res.write("hello world 333 !!");
    res.end();                          // finalizar resposta
});

app. listen(8080); // 
