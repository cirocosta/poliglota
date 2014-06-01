'use strict';

var assert = require('assert');
var sinon = require('sinon');
var http = require('http');
var poliglota = require('../src/poliglota.js');

describe('poliglota,', function () {
	it('should be sane', function () {
		assert(!!poliglota);
	});

	describe('translate', function () {
		it('should make the right call', function () {
			var expectedPath = '/translate_a/t?client=t&hl=en&ie=UTF-8&oe=UTF-8&multires=1&otf=2&ssel=0&tsel=0&sc=1&text=The%20book%20is%20on%20the%20table&tl=en&sl=auto';

			sinon.stub(http, 'get');
			poliglota.translate('The book is on the table', 'en');

			assert(http.get.calledOnce);
			assert.equal(http.get.getCall(0).args[0].path, expectedPath);
		});
	});

	describe('_normalizeResult,', function () {

		it('should handle well what comes from the api', function () {
			var result = '[[["The book is on the table","O livro está sobre a mesa","",""]],,"pt",,[["The book",[1],true,false,731,0,2,0],["is on the table",[2],true,false,722,2,6,0]],[["O livro",1,[["The book",731,true,false],["This book",0,true,false]],[[0,7]],"O livro está sobre a mesa"],["está sobre a mesa",2,[["is on the table",722,true,false],["on the table",0,true,false],["have on the table",0,true,false]],[[8,25]],""]],,,[["pt"]],1]';
			var expected = 'The book is on the table';
			var actual = poliglota._normalizeResult(result);

			assert.equal(actual, expected);
		});

		it('should not raise error with \'não\'', function () {
			var result = '[[["not","não","",""]],[["particle",["not","no","non","nay","nope"],[["not",["não"],,0.51075],["no",["não"],,0.059123605],["non",["não"],,0.035860281],["nay",["não"],,1.9526267e-05],["nope",["não"],,3.3405504e-06]],"não",19]],"pt",,[["not",[1],true,false,938,0,1,0]],[["não",1,[["not",938,true,false],["no",61,true,false],["non",0,true,false],["do not",0,true,false],["does not",0,true,false]],[[0,3]],"não"]],,[,"não-",[10],,true],[],2]';
			var expected = 'not';
			var actual = poliglota._normalizeResult(result);

			assert.equal(actual, expected);
		});
	});
});
