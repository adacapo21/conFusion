/**
 * Created by aggeloskappos on 24/10/16.
 */
'use strict';

var
    express = require('express'),
    morgan = require('morgan'),
    dishRouter = require('./dishRouter'),
    promoRouter = require('./promoRouter'),
    leaderRouter = require('./leaderRouter');

//binds to all available ips on the machine
var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

//mounting routes
app.use('/dishes', dishRouter);
app.use('/leadership', leaderRouter);
app.use('/promotions', promoRouter);

//handle requests that are not supported / found in the server
app.use(function(req, res, next) {
    res.status = 404;
    res.end("Error: Cannot " + req.method + " " + req.url + " it's not implemented ");
});


app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
    console.log('Server running at http://${hostname}:${port}/');
});