module.exports = function(){
    this.getConteudo = function (connection, callback) {
        connection.query("SELECT * FROM conteudo WHERE categoria = 'frontend'", callback);
    };

    this.getBackend = function (connection, callback) {
        connection.query("SELECT * FROM conteudo WHERE categoria = 'backend'", callback);
    };

    this.getServers = function (connection, callback) {
        connection.query("SELECT * FROM conteudo WHERE categoria = 'servidor'", callback);
    }

    this.saveContent = function (content, connection, callback){
        connection.query("INSERT INTO conteudo set ?", content);
    }

    return this;
}