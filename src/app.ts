
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { globalErrorHandler } from './app/middleware/globalErrorHandler';
import { notFound } from './app/middleware/notFound';

import cookieParser from 'cookie-parser';
import router from './app/routes';


const app: Application = express();

//parsers
app.use(express.json());
app.use(cookieParser());
app.use(
  cors(
    {
    origin: ['http://localhost:5174'],// Allow frontend origin
    credentials: true, // Allow cookies and credentials
  }
),
);

// application routes
// application routes
app.use('/api', router);

const getAController = async (req: Request, res: Response) => {
  res.json({
    message: 'Get the data',
  });
};
app.get('/', getAController);
// set global error
app.use(globalErrorHandler);
app.use(notFound);

export default app;
