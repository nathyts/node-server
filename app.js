const app = require('./config/server');

const rotaHome = require('./routes/home')(app);
const rotaFront = require('./routes/front')(app);
const rotaBack = require('./routes/back')(app);
const rotaServer = require('./routes/servers')(app);


app.listen(3000, function(){
    console.log("Server on!");
})
