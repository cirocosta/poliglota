# poliglota

> Translates a given text.

![build status](https://travis-ci.org/cirocosta/poliglota.svg?branch=master)

## Quickuse

Install it
```sh
$ npm install -g poliglota
```

and use it in your shell:

```sh
$ poliglota --text="The book is on the table" --to="pt"   # will use language recognition (auto)
# O livro está sobre a mesa

$ poliglota --text="O livro está sobre a mesa" --to="en" --from="pt"
# The book is on the table

$ echo "O livro está sobre a mesa" | ./bin/poliglota --to=en
# The book is on the table
```

with NodeJS:

```javascript
var poliglota = require('poliglota');
var text = 'The book is on the table';

poliglota.translate(text, 'en').then(function(d) {
  console.log(d);
});

// O livro está sobre a mesa
```

or in the Browser:

```javascript
//TODO
```

## Keycode reference

|         name        |  key  |
| ------------------- | ----- |
| Afrikaans           | af    |
| Albanian            | sq    |
| Arabic              | ar    |
| Azerbaijani         | az    |
| Basque              | eu    |
| Bengali             | bn    |
| Belarusian          | be    |
| Bulgarian           | bg    |
| Catalan             | ca    |
| Chinese Simplified  | zh-CN |
| Chinese Traditional | zh-TW |
| Croatian            | hr    |
| Czech               | cs    |
| Danish              | da    |
| Dutch               | nl    |
| English             | en    |
| Esperanto           | eo    |
| Estonian            | et    |
| Filipino            | tl    |
| Finnish             | fi    |
| French              | fr    |
| Galician            | gl    |
| Georgian            | ka    |
| German              | de    |
| Greek               | el    |
| Gujarati            | gu    |
| Haitian Creole      | ht    |
| Hebrew              | iw    |
| Hindi               | hi    |
| Hungarian           | hu    |
| Icelandic           | is    |
| Indonesian          | id    |
| Irish               | ga    |
| Italian             | it    |
| Japanese            | ja    |
| Kannada             | kn    |
| Korean              | ko    |
| Latin               | la    |
| Latvian             | lv    |
| Lithuanian          | lt    |
| Macedonian          | mk    |
| Malay               | ms    |
| Maltese             | mt    |
| Norwegian           | no    |
| Persian             | fa    |
| Polish              | pl    |
| Portuguese          | pt    |
| Romanian            | ro    |
| Russian             | ru    |
| Serbian             | sr    |
| Slovak              | sk    |
| Slovenian           | sl    |
| Spanish             | es    |
| Swahili             | sw    |
| Swedish             | sv    |
| Tamil               | ta    |
| Telugu              | te    |
| Thai                | th    |
| Turkish             | tr    |
| Ukrainian           | uk    |
| Urdu                | ur    |
| Vietnamese          | vi    |
| Welsh               | cy    |
| Yiddish             | yi    |

*not all of them verified.*
