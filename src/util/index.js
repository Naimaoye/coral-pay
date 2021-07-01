import { valid_credit_card } from './luhnAlgo';
import {
    validateAmericanExpress,
    validateVisa,
    validateMasterCard,
    validateDiscorver,
    validateDinersClub,
    validateJCB
} from './validateCardType';

export const validateCardNumber = (digits, cardType) => {
    // using Luhn's algorithm.
    const luhnsValidation = valid_credit_card(digits);
    if(luhnsValidation){
        if(cardType == 'american express'){
            validateAmericanExpress(digits);
        } else if(cardType == 'visa'){
            validateVisa(digits);
        } else if(cardType == 'mastercard'){
            validateMasterCard(digits);
        } else if(cardType == 'discover'){
            validateDiscorver(digits)
        } else if(cardType == 'diners club'){
            validateDinersClub(digits)
        } else if(cardType == 'jcb'){
            validateJCB(digits)
        } else {
            throw new Error('selected card type does not match with card digits')
        }
    } else {
        throw new Error('not a valid credit card');
    }
};

export const validateExpiryDate = (exMonth, exYear) => {
    let today, someday;
    today = new Date();
    someday = new Date();
    someday.setFullYear(exYear, exMonth, 1);

    if (someday < today) {
        throw new Error("Please select a valid expiry date");
    } else {
        return true;
    }
};

export const validateCVV = (cvv) => {
    let myRe = /^[0-9]{3,4}$/;
         var myArray = myRe.exec(cvv);
         if(cvv!=myArray){
            throw new Error("Invalid cvv number"); //invalid cvv number
         } else {
            return true;  //valid cvv number
         }
};

export const validateCreditCardType = (cardType) => {
    const cardTypeArr = [
        'american express',
        'visa',
        'mastercard',
        'discover',
        'diners club',
        'jcb'
    ];
    let cardTypeValue = cardType.toLowerCase();
    if(cardTypeArr.includes(cardTypeValue)){
        return cardTypeValue;
    } else {
        return false;
    }
};

export const validatePhoneNumber = (phoneNumber) => {
    var number;
    var pattern = /^([0]{1})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7,8})$/g;
  
    if (!phoneNumber || phoneNumber.length < 5) return false;
  
    if (typeof phoneNumber === 'number') {
  
      // numbers never begin with 0, force this to become a string
      number = '0' + phoneNumber;
  
    } else {
  
      return false;
  
    }
  
    // trim all white spaces
    return pattern.test(number.replace(/\s+/g, ''));
};

export const validateEmailAddress = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};