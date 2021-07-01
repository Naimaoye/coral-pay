import express from 'express';
import verifyCardDetails from '../controller/index';

const cardRoute = express.Router();

cardRoute.post(`/verify`, verifyCardDetails.creditCard);

  

export default cardRoute; 