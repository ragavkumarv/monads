const R = require('ramda');
const log = console.log;

const add = x => y => log(x + y);

log(add(1))

const inc = add(1);

inc(2);
inc(3);
inc(100);

/*======== Challenge 1 ======*/
//Wirte a double function only with R.multiply R.map to  [1,3,6]



/*======== Challenge 2 ======*/
const greater = (a,b) => a > b ? a : b;
//Wirte a max function only with R.reduce or R.filter R.map to  [-1,-1000,-3]


/*======== Challenge 3 ======*/
// Write a function to double and find the max
