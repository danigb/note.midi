# music.note.midi

[![Build Status](https://travis-ci.org/danigb/music.note.midi.svg?branch=master)](https://travis-ci.org/danigb/music.note.midi)
[![Test Coverage](https://codeclimate.com/github/danigb/music.note.midi/badges/coverage.svg)](https://codeclimate.com/github/danigb/music.note.midi/coverage)
[![Climate](https://codeclimate.com/github/danigb/music.note.midi/badges/gpa.svg)](https://codeclimate.com/github/danigb/music.note.midi)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm version](https://img.shields.io/npm/v/music.note.midi.svg)](https://www.npmjs.com/package/music.note.midi)
[![license](https://img.shields.io/npm/l/music.note.midi.svg)](https://www.npmjs.com/package/music.note.midi)
[![music.kit](https://img.shields.io/badge/music-kit-yellow.svg)](https://www.npmjs.com/package/music.kit)

`music.note.midi` is a tiny function (641 bytes minified) to get the midi number from a note name:

```js
var midi = require('music.note.midi')
midi('A4') // => 69
midi('C2') // => 36
```

See [music.note.fromMidi](https://github.com/danigb/music.note.fromMidi) for the opposite operation.

This is part of [music.kit](https://github.com/danigb/music.kit)

## Installation

Install via npm: `npm install --save music.note.midi` or use add the dist file to the html page.

## Documentation

[Generated documentation here](https://github.com/danigb/music.note.midi/blob/master/API.md)

## License

MIT License
