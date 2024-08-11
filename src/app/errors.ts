import { ErrorRequestHandler, RequestHandler } from 'express';
import { byPercentage } from 'shared/lib/random';
import { AppLoger } from 'shared/logger';

export const errorHandlerMiddleware =
    (logger: AppLoger): ErrorRequestHandler =>
    (err, req, res, next) => {
        logger.error(err);

        res.status(500);
        res.send({ err: err.message });
    };

export const failByPrecentMiddleware =
    (percent): RequestHandler =>
    (req, res, next) => {
        if (byPercentage(percent)) {
            throw new Error(`Fail by precent of ${percent}`);
        }
        next();
    };
