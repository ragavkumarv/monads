const R = require('ramda');

const log = console.log
const Box = x => 
({
	map:f	=> Box(f(x)),
	fold:f => f(x),
    inspect: () => `Box(${x})` 
})


const strUpper =  str =>
Box(str)
.map(R.toUpper)
.map(str=>str.length)
.inspect()

console.log(strUpper('Ragav'))

//Old name Either new Name Result
const Ok = x => 
({
    map:f	=> Ok(f(x)),
    fold:(f,g) => g(x),
    inspect: () => `Ok(${x})` 
})

const Error = x => 
({
    map:f	=> Error(x),
    fold: (f,g)=> f(x),
    inspect: () => `Error(${x})` 
})

const result = 
    Error(2)    
    .map(x => x + 1)
    .map(x => x/2)
    .fold(x=>'error', x => x)

log(result)    