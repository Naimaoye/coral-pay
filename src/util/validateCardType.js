export const returnCardType = (digit) => {
let cardType;
console.log('digits', digit);
  if(digit.match(/^(?:3[47][0-9]{13})$/)){
       // digits should Start with 34 or 37, length 15 digits
      cardType = 'American Express';
      return cardType;
     } else if(digit.match(/^(?:4[0-9]{12}(?:[0-9]{3})?)$/)){
         // digits should start with 4, length 13 or 16 digits
        cardType = 'Visa';
        return cardType;
     } else if(digit.match(/^(?:5[1-5][0-9]{14})$/)){
        // digits should start with 51 through 55, length 16 digits.
        cardType = 'Mastercard';
        return cardType;
    } else if(digit.match(/^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/)){
        // digits should start with 6011, length 16 digits or starting with 5, length 15 digits
        cardType = 'Discover';
        return cardType;
    } else if(digit.match(/^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/)){
        // digits should start with 300 through 305, 36, or 38, length 14 digits
        cardType = 'Dinners Club';
        return cardType;
    } else if(digit.match(/^(?:(?:2131|1800|35\d{3})\d{11})$/)){
        // digits should start with 2131 or 1800, length 15 digits or starting with 35, length 16 digits
        cardType = 'JCB';
        return cardType;
    } else {
        throw new Error('unknown card Type');
    }
}

