var express = require('express'),
    app = express(),
    morgan  = require('morgan');

app.engine('html', require('ejs').renderFile);
app.use(morgan('combined'))

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.listen(port, ip, function(){
  console.log('Server running on http://%s:%s', ip, port);
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

module.exports = app ;