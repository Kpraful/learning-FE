var slugify = require('slugify')

let a = slugify('some string');

let b= slugify('some_string','_');

console.log(a,b)