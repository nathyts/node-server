module.exports = function(app) {
    
    app.get('/frontend', function(req, res){
        
        const conn = app.config.database();
        const query = app.models.conteudoModel;
        
        query.getConteudo(conn,
            function(error,results, fields){
                console.log(error,results);
                res.render('pages/frontend',{ dados:results });
            });
    });
}
