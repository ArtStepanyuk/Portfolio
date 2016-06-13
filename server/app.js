/**
 * Main application file
 */

'use strict';

import express from 'express';
import bodyParser from 'body-parser'
import sqldb from './sqldb';
import config from './config/environment';
import http from 'http';

// Populate databases with sample data
if (config.seedDB) { require('./config/seed'); }

// Setup server
var app = express();
app.use(bodyParser.json());
var server = http.createServer(app);

var sendgrid_username   = process.env.SENDGRID_USERNAME;
var sendgrid_api   = process.env.SENDGRID_API;

var sendgrid   = require('sendgrid')(sendgrid_api);
var email      = new sendgrid.Email();

app.post('/email', function(req, res) {

    email.addTo('lmasamunel1988@gmail.com');
    email.setFrom(req.body.email);
    email.setHtml(req.body.text);
    email.setSubject(req.body.name);
    email.addHeader('X-Sent-Using', 'SendGrid-API');
    email.addHeader('X-Transport', 'web');

    sendgrid.send(email, function(err, json) {
        if (err) {
          console.error(err);
        }
        console.log(json);
      })
});

var cors = require('cors');
app.use(cors());
require('./config/express').default(app);
require('./routes').default(app);

// Start server
function startServer() {
  app.angularFullstack = server.listen(config.port, config.ip, function() {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
}

sqldb.sequelize.sync()
  .then(startServer)
  .catch(function(err) {
    console.log('Server failed to start due to error: %s', err);
  });

// Expose app
exports = module.exports = app;
