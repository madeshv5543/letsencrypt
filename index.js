var httpProxy = require('http-proxy');
var fs = require('fs'); 

httpProxy.createServer({
         target: {
                      host: '127.0.0.1',
                      port: 6612
                  },
               ws:true,
         ssl: {
                     key: fs.readFileSync('/etc/letsencrypt/live/handshake.in/privkey.pem', 'utf8'),
                     cert: fs.readFileSync('/etc/letsencrypt/live/handshake.in/fullchain.pem', 'utf8')
               }
}).listen(443);