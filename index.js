const Result =  require('folktale/result')
const _ = require('lodash/fp');
const {Ok,Error} = Result;
const {cond,T,lt,gt,always} = require('ramda')

const tax = tax => price => 
    (!_.isNumber(price)) ? Error("Price must be numeric") : Ok(price + (tax * price));
  
  //Returns error or price indluding discount
  const discount1 = dis => price => {
    if (!_.isNumber(price)) return Error("Price must be numeric");
  
    if (price < 10) return Error("discount cant be applied for items priced below 10");
  
    return Ok(price - (price * dis));
  };

  const discount = dis => price =>
    cond([
        [x => !_.isNumber(x), () => Error("Price must be numeric")],
        [gt(10), () => Error("discount cant be applied for items priced below 10")],
        [T, () => Ok(price - (price * dis))],
    ])(price)

  
  const gst = tax(.10);
  const diwaliDisc = discount(.25);
 
  const getItemPrice = (item) => Ok(item.price);
  const log = type => msg => console.log( type, msg )
  const err = log('Error: ');


  const showTotalPrice = (item) =>
    getItemPrice(item)
    .chain(gst)
    .chain(diwaliDisc)
    .fold(err,log('Total Price: '))
    

  let tShirt = { name: 't-shirt', price: 11 };
  let pant = { name: 't-shirt', price: '10 dollars' };
  let chips = { name: 't-shirt', price: 5 }; //less than 10 dollars error
  
  showTotalPrice(tShirt) // Total Is: 9.075
  showTotalPrice(pant)   // Error: Price must be numeric
  showTotalPrice(chips)  //Error: discount cant be applied for items priced below 10