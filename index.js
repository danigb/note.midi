'use strict'

var parse = require('music.note.scientific.parse')

/**
 * Get the midi number of a note
 *
 * The note can be an string in scientific notation or
 * [array pitch notation](https://github.com/danigb/music.array.notation)
 *
 * @name midi
 * @function
 * @param {String|Array} note - the note in string or array notation
 * @return {Integer} the midi number
 *
 * @example
 * midi('A4') // => 69
 * midi('A3') // => 57
 * midi([1, 1]) // => 36 (C2 in array notation)
 */
function midi (note) {
  var p = Array.isArray(note) ? note : parse(note)
  if (!p || p.length < 2) return null
  return p[0] * 7 + p[1] * 12 + 17
}

if (typeof module === 'object' && module.exports) module.exports = midi
if (typeof window !== 'undefined') window.midi = midi
