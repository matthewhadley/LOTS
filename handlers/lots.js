'use strict';

var LOTS = require('../lib/lots');

exports.cache = function(request, reply) {
  var lots = LOTS(request.server.settings.app);
  lots.cached(function(err, data){
    if(!data){
      lots.generate(function(err, data) {
        reply.view('lots', {lots: data});
      });
    } else {
      reply.view('lots', {lots: data});
    }
  });
};

exports.generate = function(request, reply){
  var lots = LOTS(request.server.settings.app);
  lots.generate(function(err, data) {
    reply.view('lots', {lots: data});
    lots.log();
  });
};

