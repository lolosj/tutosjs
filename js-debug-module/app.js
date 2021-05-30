const debug = require('debug');
const log = debug('http');
const lolog = debug('lolo');
const errorLogger = debug('error'); 

const http = require('http');

const name = 'Demo App for debug module';

log(`booting ${name}`);
lolog(`booting ${name}`);

http.createServer((req, res) => {
  log(req.method + ' ' + req.url);
  res.end('hellon');

  // fake an error to demonstrate using debug for http:error namespace
  setTimeout(() => {
    errorLogger('fake error'); // then call the logger 
  }, 1000);
}).listen(3200, () => {
  log('listening');
});