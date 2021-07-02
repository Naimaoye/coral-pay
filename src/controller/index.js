import {
    validateEmailAddress,
    validatePhoneNumber,
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
         * @returns  JSON response or XML
         * @memberof VerifyCreditCard
    */
     static async creditCard(req, res) {
        try {
        const { cvv, expiryDate, cardPin, emailAddress, phoneNumber } = req.body;
        const {apiKey} = req.query;
        const splitDate = expiryDate.split('/');
        const exMonth = splitDate[0];
        const exYear = splitDate[1];
        if(!apiKey){
            res.status(403).send({
                'message': 'you are not authorized'
            })
        } else {
        if(!cvv || !expiryDate || !cardPin || !emailAddress || !phoneNumber){
          res.status(400).send({
              'message': "no field should be empty!"
          })
        } else {
            const validateCardPin = validateCardNumber(cardPin);
            const validatecvv = validateCVV(cvv);
            const checkExpiryDate = validateExpiryDate(exMonth, exYear);
            const checkPhoneNumber = validatePhoneNumber(phoneNumber);
            const checkEmail = validateEmailAddress(emailAddress);
            if(validateCardPin && validatecvv && checkExpiryDate && checkPhoneNumber && checkEmail){
                res.status(200).send({
                    'valid': true,
                    'cardType': validateCardPin,
                    'cvv': cvv,
                    'expiryDate': expiryDate,
                    'pin': cardPin,
                });
            }
        }
      }
      } catch(e){
        res.status(400).send({
            'valid': false,
            'error': e.message
        })
        logger.error('Error from integration', e)
      }
   }

};
