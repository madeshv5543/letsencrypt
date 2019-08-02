var httpProxy = require('http-proxy');
var fs = require('fs'); 

httpProxy.createServer({
         target: {
                      host: '127.0.0.1',
                      port: 6611
                  },
               ws:true,
         ssl: {
                     key: fs.readFileSync('/etc/letsencrypt/live/hashstack.in/privkey.pem', 'utf8'),
                     cert: fs.readFileSync('/etc/letsencrypt/live/hashstack.in/fullchain.pem', 'utf8')
               }
}).listen(443);