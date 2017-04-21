const fs = require('fs');
const levenshtein = require('./levenshtein.js');
let input = fs.readFileSync('input.txt').toString().split('\n');
let patterns = fs.readFileSync('patterns.txt').toString().split('\n');
const intersection = (a, b) => a.filter(c => b.includes(c));
const partial = (a, b) => a.filter(c => b.some(d => c.includes(d)));
const similar = (a, b) => a.filter(c =>  b.some(d => levenshtein(c, d) <= 1));

console.log(intersection(input,patterns).toString());
console.log(partial(input,patterns).toString());
console.log(similar(input,patterns).toString());