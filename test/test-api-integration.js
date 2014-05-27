var assert = require('assert');
var poliglota = require('../src/poliglota.js');

describe('poliglota,', function () {
	it('should be sane', function () {
		assert(!!poliglota);
	});

	describe('regarding the Request made,', function () {
		this.timeout(3000);

		it('should ...', function (done) {
			var text = 'O livro está sobre a mesa';
			var translatedText = 'The book is on the table';

			poliglota.translate(text, 'en').then(function (r) {
				assert.equal(r, translatedText);
				done();
			}, function (err) {
				assert(false);
			});
		});
	});
});
