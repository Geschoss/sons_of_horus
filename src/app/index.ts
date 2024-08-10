import path from 'node:path';
import cors from 'cors';
import express from 'express';
import { routes } from 'app/routes';
import { createAppLogger, createReqLog } from 'shared/logger';

export const init = async function () {
    const __dirname = path.resolve(path.dirname(''));

    const app = express();
    const port = 3000;
    const logger = createAppLogger();
    const env = {
        __dirname,
    };

    app.use(createReqLog(logger));
    app.use(cors());

    routes.forEach((route) => {
        route({ app, logger, env });
    });

    app.listen(port, function () {
        console.log(`Example app listening on port ${port}`);
    });
};
