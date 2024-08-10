import { RequestHandler } from 'express';
import { AppLoger } from 'shared/logger';

export const createReqLog =
    (logger: AppLoger): RequestHandler =>
    (req, res, next) => {
        logger.info({ req });
        next();
    };
