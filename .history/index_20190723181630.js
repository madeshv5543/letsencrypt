var httpProxy = require('http-proxy');
var fs = require('fs'); 

httpProxy.createServer({
          target: {
                      host: '127.0.0.1',
                      port: 6611 
                   },
         ssl: {
                     key: fs.readFileSync('/etc/letsencrypt/live/eventica.smartchain.in/privkey.pem', 'utf8'),
                     cert: fs.readFileSync('/etc/letsencrypt/live/eventica.smartchain.in/fullchain.pem', 'utf8')
                  }
}).listen(443);