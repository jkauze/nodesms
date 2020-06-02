require('dotenv').config();

const app = require('./server');
const http = require('http');

// Server for socket.IO
const server = http.createServer(app);

require('./database');
require('./sockets').connection(server);

server.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})