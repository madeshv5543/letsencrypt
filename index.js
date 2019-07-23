var httpProxy = require('http-proxy');
var fs = require('fs'); 

httpProxy.createServer({
          target: {
                      host: '127.0.0.1',
                      port: 8545 
                   },
         ssl: {
                     key: fs.readFileSync('/etc/letsencrypt/live/adhinet.com/privkey.pem', 'utf8'),
                     cert: fs.readFileSync('/etc/letsencrypt/live/adhinet.com/fullchain.pem', 'utf8')
                  }
}).listen(443);