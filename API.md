## `midi`

Get the midi number of a note

If the argument passed to this function is a valid midi number, it returns it

The note can be an string in scientific notation or
[array pitch notation](https://github.com/danigb/music.array.notation)

### Parameters

* `note` **`String or Array`** the note in string or array notation


### Examples

```js
midi('A4') // => 69
midi('a3') // => 57
midi([0, 2]) // => 36 (C2 in array notation)
midi(60) // => 50
```

Returns `Integer` the midi number


