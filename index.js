'use strict'

var parse = require('music.note.scientific.parse')

// Semitones from C to C D E F G A B
var SEMITONES = [ 0, 2, 4, 5, 7, 9, 11 ]

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
 * midi([0, 0, 2]) // => 36 (C2 in array notation)
 */
module.exports = function midi (note) {
  var p = Array.isArray(note) ? note : parse(note)
  if (!p || (!p[2] && p[2] !== 0)) return null
  return SEMITONES[p[0]] + p[1] + 12 * (p[2] + 1)
}
