import { logger } from '../config/loggerConfig';
import { valid_credit_card } from './luhnAlgo';
import {
   returnCardType
} from './validateCardType';

export const validateCardNumber = (digits) => {
    // using Luhn's algorithm.
    const luhnsValidation = valid_credit_card(digits);
    if(luhnsValidation){
        const cardType = returnCardType(digits);
        return cardType;
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


export const validatePhoneNumber = (phoneNumber) => {
    var pattern = /^([0]{1})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7,8})$/g;
  
    // trim all white spaces
    if(pattern.test(phoneNumber.replace(/\s+/g, ''))){
        return true;
    } else {
        throw new Error('not a valid phone number');
    }
};

export const validateEmailAddress = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(email).toLowerCase())){
        return true;
    } else{
        throw new Error('not a valid email address');
    }
};