'use strict';

var Table = require('cli-table');
var table = new Table({
  head: ['Name', 'Key'],
  colWidths: [21, 7],
  style : {compact: true, 'padding-left': 1}
});

table.push(
	['Afrikaans', 'af'],
	['Albanian', 'sq'],
	['Arabic', 'ar'],
	['Azerbaijani', 'az'],
	['Basque', 'eu'],
	['Bengali', 'bn'],
	['Belarusian', 'be'],
	['Bulgarian', 'bg'],
	['Catalan', 'ca'],
	['ChineseSimplified', 'zh-CN'],
	['ChineseTraditional', 'zh-TW'],
	['Croatian', 'hr'],
	['Czech', 'cs'],
	['Danish', 'da'],
	['Dutch', 'nl'],
	['English', 'en'],
	['Esperanto', 'eo'],
	['Estonian', 'et'],
	['Filipino', 'tl'],
	['Finnish', 'fi'],
	['French', 'fr'],
	['Galician', 'gl'],
	['Georgian', 'ka'],
	['German', 'de'],
	['Greek', 'el'],
	['Gujarati', 'gu'],
	['HaitianCreole', 'ht'],
	['Hebrew', 'iw'],
	['Hindi', 'hi'],
	['Hungarian', 'hu'],
	['Icelandic', 'is'],
	['Indonesian', 'id'],
	['Irish', 'ga'],
	['Italian', 'it'],
	['Japanese', 'ja'],
	['Kannada', 'kn'],
	['Korean', 'ko'],
	['Latin', 'la'],
	['Latvian', 'lv'],
	['Lithuanian', 'lt'],
	['Macedonian', 'mk'],
	['Malay', 'ms'],
	['Maltese', 'mt'],
	['Norwegian', 'no'],
	['Persian', 'fa'],
	['Polish', 'pl'],
	['Portuguese', 'pt'],
	['Romanian', 'ro'],
	['Russian', 'ru'],
	['Serbian', 'sr'],
	['Slovak', 'sk'],
	['Slovenian', 'sl'],
	['Spanish', 'es'],
	['Swahili', 'sw'],
	['Swedish', 'sv'],
	['Tamil', 'ta'],
	['Telugu', 'te'],
	['Thai', 'th'],
	['Turkish', 'tr'],
	['Ukrainian', 'uk'],
	['Urdu', 'ur'],
	['Vietnamese', 'vi'],
	['Welsh', 'cy'],
	['Yiddish', 'yi']
);

module.exports = table;
