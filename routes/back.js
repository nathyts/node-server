module.exports = function(app) {
    
    app.get('/backend', function(req, res){
        
        const conn = app.config.database();
        const query = app.models.conteudoModel;
        
        query.getBackend(conn,
            function(error,results, fields){
                console.log(error,results);
                res.render('pages/backend',{ dados:results });
            });
    });
}