import path from 'node:path';
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import { routes } from 'app/routes';

import { createAppLogger, loggerMiddleware } from 'shared/logger';
import { errorHandlerMiddleware, failByPrecentMiddleware } from 'app/errors';

export const init = async function () {
    dotenv.config();

    const env = {
        port: parseInt(process.env.PORT, 10) || 3000,
        dirname: path.resolve(path.dirname('')),
        failByPrecent: parseInt(process.env.FAIL_BY_PRECENT, 10) || 10,
    };

    const app = express();
    const logger = createAppLogger();

    app.use(cors());
    app.use(loggerMiddleware(logger));

    app.use(failByPrecentMiddleware(env.failByPrecent));

    app.use(errorHandlerMiddleware(logger));

    routes.forEach((route) => {
        route({ app, logger, env });
    });

    app.listen(env.port, function () {
        console.log(`Example app listening on port ${env.port}`);
    });
};
