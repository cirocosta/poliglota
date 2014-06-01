#!/usr/bin/env node
'use strict';

var http = require('http');
var qs = require('querystring');
var Q = require('q');

function TranslateApi () {
  this.API_SERVER = {
    host: 'translate.google.com.br',
    path: '/translate_a/t?client=t&hl=en&ie=UTF-8&oe=UTF-8&multires=1&otf=2&ssel=0&tsel=0&sc=1'
  };
}

TranslateApi.prototype._normalizeResult = function(result) {
  return JSON.parse(result.replace(/,{2,}/g,',')
                          .replace(',]',']')
                          .replace('[,', '['))[0][0][0];
};

TranslateApi.prototype.translate = function (text, toLang, srcLang) {
  var def = Q.defer(),
      data,
      url,
      scope = this;

  if (!(text && toLang))
    def.reject(new Error('No text and/or lang passed.'));

  data = {
    text: text,
    tl: toLang,
    sl: srcLang || 'auto'
  };

  var reqOptions = {
    host: scope.API_SERVER.host,
    path: scope.API_SERVER.path +
      '&' + qs.stringify(data),
    headers: {
      'User-Agent': 'Mozilla/5.0'
    },
    method: 'GET'
  };

  var req = http.request(reqOptions, function (res) {
    var data = '';

    if (res.statusCode !== 200) def.reject();

    res.setEncoding('utf8');
    res.on('data', function (buf) {
      data += buf;
    });

    res.on('end', function () {
      def.resolve(scope._normalizeResult(data));
    });

    res.on('error', function (er) {
      def.reject(er);
    });
  });
  req.end();

  return def.promise;
};

module.exports = new TranslateApi();
