var assert = require('assert');
var poliglota = require('../src/poliglota.js');

describe('poliglota,', function () {
	it('should be sane', function () {
		assert(!!poliglota);
	});

	describe('_normalizeResult,', function () {

		var result = '[[["The book is on the table","O livro está sobre a mesa","",""]],,"pt",,[["The book",[1],true,false,731,0,2,0],["is on the table",[2],true,false,722,2,6,0]],[["O livro",1,[["The book",731,true,false],["This book",0,true,false]],[[0,7]],"O livro está sobre a mesa"],["está sobre a mesa",2,[["is on the table",722,true,false],["on the table",0,true,false],["have on the table",0,true,false]],[[8,25]],""]],,,[["pt"]],1]';

		it('should handle well what comes from the api', function () {
			var expected = 'The book is on the table';
			var actual = poliglota._normalizeResult(result);

			assert.equal(actual, expected);
		});
	});
});
