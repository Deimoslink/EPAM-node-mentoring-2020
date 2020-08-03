import express, {Application, NextFunction, Request, Response} from 'express';
import {routerUsers} from './api/users';
import morgan = require('morgan');
import * as bodyParser from 'body-parser';

const port = process.env.PORT || 3000;
const app: Application = express();


// Logger
app.use(morgan('dev'));

// Body parser
app.use(bodyParser.json());

// Routes
app.use('/users', routerUsers);

// Error handling
app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error('Not found');
    next(error);
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(404);
    res.json({
        error: {
            message: err.message
        }
    });
});

app.listen(port, () => console.log(`server is running on port ${port}`));
