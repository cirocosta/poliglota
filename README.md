# poliglota ![build status](https://travis-ci.org/cirocosta/poliglota.svg?branch=master)

> Translates a given text.


[![NPM](https://nodei.co/npm/poliglota.png?compact=true)](https://nodei.co/npm/poliglota/)

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

Here is the keycode (to be used when passing to `--to` & `--from` args) mapping table. The same table is also exposed via CLI by doing `$ poliglota -m`.

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

#### LICENSE

The MIT License (MIT)

Copyright (c) <2014> <Ciro S. Costa>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
