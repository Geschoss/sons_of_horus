import Logger from 'bunyan';
import bunyan from 'bunyan';

export type AppLoger = {
    info: Logger['info'];
    warn: Logger['warn'];
};

export const createAppLogger = (): AppLoger => {
    const logger = bunyan.createLogger({
        name: 'Son of Horus',
        serializers: {
            req: function (req) {
                return {
                    url: req.url,
                    method: req.method,
                    // headers: req.headers,
                };
            },
        },
    });

    return {
        info: logger.info.bind(logger),
        warn: logger.warn.bind(logger),
    };
};
