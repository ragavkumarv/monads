const R = require('ramda');
const Result =  require('folktale/result')

/*======== Helpher Function ========*/
const {Ok,Error} = Result;
const log = console.log
const get = x => obj => obj[x]; 
const {map,compose} = R;

/*const Box = x => 
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

log(result) */

/*======== Challenge 1 ======*/

const showWelcome = compose(str => "Welcome " + str , get('name'))
const checkActive = (user) => user.active ? Ok(user) : Error('Your account is not active')

const ex1 = compose(map(showWelcome),checkActive)

log( ex1({active: true, name: 'Gary'}) )

/*======== Challenge 2 ======*/
// Write a validation function that checks for a length > 3. It should return Ok(x) if it is greater than 3 and Error("You need > 3") otherwise
//Ok("chennai-js"), ex3("chennai-js")
//Error("You need > 3"), ex3("hmm"))

const ex2 = str => str.length>3 ? Ok(str) : Error('You need > 3')

log( ex2('chennai-js') )