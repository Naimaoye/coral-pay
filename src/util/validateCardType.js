export const validateAmericanExpress = (digit) => {
    // digits should Start with 34 or 37, length 15 digits

let cardno = /^(?:3[47][0-9]{13})$/;
  if(digit.value.match(cardno)){
      return true;
     } else {
        throw new Error("Not a valid Amercican Express credit card number!");
    }
}

export const validateVisa = (digit) => {
    // digits should start with 4, length 13 or 16 digits
    let cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    if(digit.value.match(cardno)){
        return true;
    } else {
        throw new Error("Not a valid Visa credit card number!");
    }

}

export const validateMasterCard = (digit) => {
    // digits should start with 51 through 55, length 16 digits.
    let cardno = /^(?:5[1-5][0-9]{14})$/;
        if(digit.value.match(cardno)){
            return true;
        } else {
            throw new Error("Not a valid Mastercard number!");
        }
}

export const validateDiscorver = (digit) => {
    // digits should start with 6011, length 16 digits or starting with 5, length 15 digits
    let cardno = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
        if(digit.value.match(cardno)){
             return true;
        } else {
        throw new Error("Not a valid Discover card number!");
        }
}

export const validateDinersClub = (digit) => {
    // digits should start with 300 through 305, 36, or 38, length 14 digits
    let cardno = /^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/;
        if(digit.value.match(cardno)){
            return true;
        } else {
          throw new Error("Not a valid Dinners Club card number!");
        }
};

export const validateJCB = (digit) => {
    // digits should start with 2131 or 1800, length 15 digits or starting with 35, length 16 digits
    var cardno = /^(?:(?:2131|1800|35\d{3})\d{11})$/;
        if(digit.value.match(cardno)){
            return true;
        } else {
          throw new Error("Not a valid JCB card number!");
        }
}