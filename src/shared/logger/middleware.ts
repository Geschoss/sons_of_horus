import { RequestHandler } from 'express';
import { AppLoger } from 'shared/logger';

export const loggerMiddleware =
    (logger: AppLoger): RequestHandler =>
    (req, res, next) => {
        logger.info({ req });
        next();
    };
