const R = require('ramda');
/*======== Helpher Function ========*/
const log = console.log;
const get = x => obj => obj[x]; 

/*======== Sample Data ========*/
const profiles = [
    {
      "name": "Gilmore Valentine",
      "age": 22,
      "gender": "male",
      "friend": {
        "id": 0,
        "name": "Kirsten Chandler"
      }
    },
    {
      "name": "Carey Dalton",
      "age": 32,
      "gender": "female",
      "friend": {
        "id": 1,
        "name": "Elena Carpenter"
      }
    },
    {
      "name": "Harmon Hines",
      "age": 21,
      "gender": "male",
      "friend": {
        "id": 2,
        "name": "Cherry Stanley"
      }
    },
    {
      "name": "Aurora Mckee",
      "age": 24,
      "gender": "female",
      "friend": {
        "id": 3,
        "name": "Nikki Harvey"
      }
    },
    {
      "name": "Small Rodriguez",
      "age": 21,
      "gender": "male",
      "friend": {
        "id": 4,
        "name": "Gretchen Williamson"
      }
    }
  ]
const add = x => y => log(x + y);

log(add(1))

const inc = add(1);

inc(2);
inc(3);
inc(100);

/*======== Challenge 1 ======*/
//Wirte a double function only with R.multiply R.map to  [1,3,6]
const double = R.map(R.multiply(2))

log(double([1,3,6]))


/*======== Challenge 2 ======*/
const greater = (a,b) => a > b ? a : b;
//Wirte a max function only with R.reduce or R.filter R.map to  [-1,-1000,-3]

const max = R.reduce(greater, -Infinity);

log(max([-1,-1000,-3]))


/*======== Challenge 3 ======*/
// Write a function to double and find the max

const doubleMax = R.compose(max,double)

log(doubleMax([-1,200,-3]))


/*======== Challenge 4 ========*/
// Write a names function to get all names of friend from the profiles puts it in array 
// Hint: use get Helper function and R.compose
const names = R.map(R.compose(
                 get('name')
                ,get('friend')
            ))
log(names(profiles))
/*======== Challenge 5 ========*/
// Write a isFriend function returns boolean given profiles 
// Use above names function and R.contains

const isFriend = name => R.compose(R.contains(name),names)

log(isFriend('Cherry Stanley')(profiles))