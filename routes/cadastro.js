module.exports = function(app) {
    
    app.get('/cadastro', function(req, res){
        res.render('pages/cadastro');
    });

    app.post('/cadastro/salvar', function(req, res){
        const content = req.body;
        const conn = app.config.database();
        const contentModel = app.models.conteudoModel;

        contentModel.saveContent(content, conn, function(error, result){

        });

        contentModel.getConteudo(conn, 
            function(error,result,fields){
                console.log(error,result);
                res.render('home/index',{dados:result});
            });
    })

}