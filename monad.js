const R = require('ramda');

const log = console.log
const Box = x => 
({
	map:f	=> Box(f(x)),
	fold:f => f(x),
    Inspect: () => `Box(${x})` 
})


const strUpper =  str =>
Box(str)
.map(R.toUpper)
.map(str=>str.length)
.Inspect()

console.log(strUpper('Ragav'))
