# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install ahmedalwardani/lotide`

**Require it:**

`const _ = require('ahmedalwardani/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertEqual(): takes two values (actual and expected) and prints out a statemend indicating whether they are equal or not

- `assertArraysEqual()`: takes two arrays and prints out a statemend indicating whether they are equal or not

- `assertObjectsEqual()`: takes two objects and prints out a statemend indicating whether they are equal or not

- `countLetters(sentence)`: takes a sentence and returns the number of times a particular letter appears in it

- `countOnly(array, object)`: takes an array and an object and returns a new object with the number of times all names appear according to selected values in the object; counts only keys with the value "true" in the passed in object

- `eqArrays(array1, array2)`: takes two arrays and checks whether they are equal or not (used then by assertArraysEqual)

- `findKey(object, callBack)`: takes an object and a callback function and returns the key where the value corresponds to the callback function

- `findKeyByValue(object, value)`: takes an object and a value and returns the key corresponding to the given value

- `flatten(array)`: takes an array that could contain subarrays and flatten them all out into a single array

- `head(array)`: takes an array and returns the first element in that array

- `tail(array)`: takes an array and returns an array of all elements after the first element (at index = 0)

- `middle(array)`: takes an array and returns an array of the middle element (if array length is odd) or an array of two elements (if array length is even)

- `letterPosition(sentence)`: takes a sentence and returns the position(s) / index of a specified character in that array

- `map(array, callBack)`: takes an array and a callback function and returns a new array (of the same length as the original array) whose entries depend on the callback function

- `takeUntil(array, callBack)`: takes an array and a callback function and returns a new array with all the elements of the input array up to a value that satisfies the callback function

- `without(srcArray, itemsToRemoveArray)`: takes two arrays and returns a new array with the itemsToRemoveArray elements removed from the srcArray
