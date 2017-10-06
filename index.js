const Result =  require('folktale/result')
const _ = require('lodash/fp');
const {Ok,Error} = Result;
console.log(Result)

const tax = tax => price => 
    (!_.isNumber(price)) ? Error("Price must be numeric") : Ok(price + (tax * price));
  
  //Returns error or price indluding discount
  const discount = dis => price => {
    if (!_.isNumber(price)) return Error("Price must be numeric");
  
    if (price < 10) return Error("discount cant be applied for items priced below 10");
  
    return Ok(price - (price * dis));
  };
  
  const gst = tax(.10);
  const diwali = discount(.25);

  const isError = (e) => e && e.name == 'Error';
  
  const getItemPrice = (item) => Ok(item.price);
  
  //shows total price after tax and discount. Need to handle multiple errors.
  const showTotalPrice1 = (item, taxPerc, disount) => {
    let price = getItemPrice(item);
 
    let result = tax(taxPerc, price);
    if (isError(result)) {
      return console.log('Error: ' + result.message);
    }
    result = discount(discount, result);
    if (isError(result)) {
      return console.log('Error: ' + result.message);
    }
    //display result
    console.log('Total Price: ' + result);
  }

  const log = type => msg => console.log( type, msg )
  const err = log('Error: ');


  const showTotalPrice = (item) =>
    getItemPrice(item)
    .chain(gst)
    .chain(diwali)
    .fold(err,log('Total Price: '))
    

  let tShirt = { name: 't-shirt', price: 11 };
  let pant = { name: 't-shirt', price: '10 dollars' };
  let chips = { name: 't-shirt', price: 5 }; //less than 10 dollars error
  
  showTotalPrice(tShirt) // Total Is: 9.075
  showTotalPrice(pant)   // Error: Price must be numeric
  showTotalPrice(chips)  //Error: discount cant be applied for items priced below 10