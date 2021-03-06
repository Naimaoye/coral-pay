import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cardRoute from './route/index';
import { logger } from './config/loggerConfig';

const app = express();


const isProduction = process.env.NODE_ENV === 'production';

// Normal express config defaults
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/coral-pay', cardRoute);



// app.use((req, res, next) => {
//   res.sendData = (obj) => {
   
//   };

//   next();
// });

// handle non-existing route
app.use((req, res, next) => {
    res.status(404).json({
      status: 404,
      error: 'Wrong request. Route does not exist',
    });
});  

//Error handlers & middlewares
if(!isProduction) {
    app.use((err, req, res, next) => {
      res.status(err.status || 500);
  
      res.json({
        errors: {
          message: err.message,
          error: err,
        },
      });

    });
  }

  app.use((err, req, res) => {
    res.status(err.status || 500);
  
    res.json({
      errors: {
        message: err.message,
        error: {},
      },
    });
  });

const PORT = 9800;
app.listen(PORT, () => {
  logger.info(`App running on port ${PORT}`);
});
