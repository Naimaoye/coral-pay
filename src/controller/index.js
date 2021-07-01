import {
    validateEmailAddress,
    validatePhoneNumber,
    validateCreditCardType,
    validateCVV,
    validateExpiryDate,
    validateCardNumber
} from '../util/index';
import { logger } from '../config/loggerConfig';

export default class VerifyCreditCard {
    /**
         * @method
         * @description Implements credit card verification
         * @static
         * @param {object} req - Request object
         * @param {object} res - Response object
         * @returns {object} JSON response or XML
         * @memberof VerifyCreditCard
    */
     static async creditCard(req, res) {
        try {
        const { cvv, expiryDate, cardPin, emailAddress, phoneNumber, cardType } = req.body;
        const {apiKey} = req.params;
        // logger.debug('BRJ response', response);
        const splitDate = expiryDate.split('/');
        const exMonth = splitDate[0];
        const exYear = splitDate[1];
        if(apiKey == ""){
            res.status(403).send({
                'message': 'you are not authorized'
            })
        } else {
        if(cvv == "" || expiryDate == "" || cardPin == "" || emailAddress == "" || phoneNumber == "" || cardType == ""){
          res.status(400).send({
              'message': "field must not be empty"
          })
        } else {
            const validateCardPin = validateCardNumber(cardPin, cardType);
            const validatecvv = validateCVV(cvv);
            const checkExpiryDate = validateExpiryDate(exMonth, exYear);
            const checkPhoneNumber = validatePhoneNumber(phoneNumber);
            const checkEmail = validateEmailAddress(emailAddress);
            if(validateCardPin && validatecvv && checkExpiryDate && checkPhoneNumber && checkEmail){
                res.status(200).send({
                    'valid': true,
                })
            }

        }
      }
      } catch(e){
        logger.error('Error from integration', e)
      }
   }

};
