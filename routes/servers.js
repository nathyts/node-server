module.exports = function(app) {
    
    app.get('/servidores', function(req, res){
        
        const conn = app.config.database();
        const query = app.models.conteudoModel;
        
        query.getServers(conn,
            function(error,results, fields){
                console.log(error,results);
                res.render('pages/servidores',{ dados:results });
            });
    });

}