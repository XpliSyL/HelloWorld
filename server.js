var express = require('express'),
    app = express(),
    config = require('cloud-env'),
    morgan  = require('morgan');

app.engine('html', require('ejs').renderFile);
app.use(morgan('combined'))

app.listen(config.PORT, config.IP, function () {
  console.log('Server running on http://%s:%s', config.IP, config.PORT);
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