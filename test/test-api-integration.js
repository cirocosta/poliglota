var assert = require('assert');
var TranslateApi = require('../src/api.js');

describe('TranslateApi,', function () {
	it('should be sane', function () {
		assert(!!TranslateApi);
	});

	var api;

	beforeEach(function () {
		api = new TranslateApi();
	});

	describe('regarding the Request made,', function () {
		this.timeout(3000);

		it('should ...', function (done) {
			var text = 'O livro está sobre a mesa';
			var translatedText = 'The book is on the table';

			api.translate(text, 'en').then(function (r,b) {
				console.log(r.body);
				assert(true);
				done();
			}, function (err) {
				assert(false);
			});
		});
	});
});
