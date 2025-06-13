//console.log("hello world!!!");

// instalação express-handlebar

const express = require ('express'); // express = framework para facilitar criação web
const { engine } = require('express-handlebars');
const app = express(); //app é o servidor web

const mysql = require ('mysql2');

//configuração do caminho estático do bootstrap
app.use ('/bootstrap', express.static (__dirname + '/node_modules/bootstrap/dist'));
app.use('/static',express.static(__dirname + '/static'));


//"engine" para visualização
app.engine('handlebars', engine());
//define o que o engine irá buscar: handlebars
app.set('view engine','handlebars');
//define onde o template estará
app.set('views','./views');


//conexão MYSQL

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

    // inserir tabela de produto
app.get ('/', (req,res) => {;
    let sql = 'select * from produto';
    conexao.query(sql, function (erro, produto_qs) {
        if (erro){
            console.error(' Erro ao consultar produtos: ', erro);
            res.status(500).send (' 👾 Erro ao consultar produtos');
            return;
        }
    res.render('index', {produto:produto_qs});
    });
}
);

    // inserir tabela de cliente
    app.get ('/cliente', (req,res) => {;
    let sql = 'select * from cliente';
    conexao.query(sql, function (erro, cliente_qs) {
        if (erro){
            console.error(' Erro ao consultar cliente: ', erro);
          res.status(500).send (' 👾 Erro ao consultar cliente');
          return;
       }
   res.render('index', {cliente:cliente_qs});
    });
}
);
    
//app.get ("/", function(req,res){     // efetuando requisição tipo get ,  / = na url , req = requisição , res= resposta
//   res.write("hello world 333 !!");
// res.end();                          // finalizar resposta
//});

app.listen(8080);
