#!/usr/bin/env node

'use strict';

var request = require('request');
var qs = require('querystring');
var Q = require('q');

function TranslateApi () {
	this.API_URL = 'http://translate.google.com.br/translate_a/t?client=t&hl=en&sl=auto&ie=UTF-8&oe=UTF-8&multires=1&otf=2&ssel=0&tsel=0&sc=1&';
}

TranslateApi.prototype._normalizeResult = function(result) {
	return JSON.parse(result.replace(/,{2,}/g,',')
	                    		  .replace(',]',']'))[0][0][0];
};

TranslateApi.prototype.translate = function (text, toLang, srcLang) {
	var def = Q.defer();
	var data;
	var url;

	if (!(text && toLang))
		def.reject(new Error('No text and lang passed.'));

	data = {
		text: text,
		tl: toLang,
		sl: srcLang || 'auto'
	};

	request(this.API_URL + qs.stringify(data), {
		'User-Agent': 'Mozilla/5.0'
	}, function (err, resp, body) {
		if (!err && resp.statusCode === 200) {
			def.resolve(resp, body)
		} else {
			def.reject(err);
		}
	});

	return def.promise;
};

module.exports = TranslateApi;
