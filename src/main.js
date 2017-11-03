let name = 'Peter Pan';

/*
 * String includes another string
 */

//ES5
if (name.indexOf('Pan') !== -1) {
  console.log('el string tiene la palabra Pan');
}

//ES6
if (name.includes('Pan')) {
  console.log('el string tiene la palabra Pan');
}

/*
 * String starts with another string
 */

//ES5
if (name.indexOf('Peter') !== 0) {
  console.log('el string empieza con la palabra Peter');
}

//ES6
if (name.startsWith('Peter')) {
  console.log('el string empieza con la palabra Peter');
}
if (name.endsWith('Pan')) {
  console.log('el string termina con la palabra Pan');
}