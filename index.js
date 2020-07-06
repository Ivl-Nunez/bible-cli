#!/usr/bin/env node
const fetch = require('node-fetch');

let book = process.argv[2];
let chapter = process.argv[3];

fetch(`https://labs.bible.org/api/?type=json&passage=${book}%20${chapter}`, { method: 'GET'})
    .then(res => res.json())
    .then(json => console.log(json[chapter].text));