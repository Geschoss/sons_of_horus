import path from 'node:path';
import serveStatic from 'serve-static';
import { Route } from 'shared/types/common';

export const mixcloudRoute: Route = ({ app, env }) => {
    app.get('/mixcloud', function (request, reply) {
        reply.send({ hello: 'mixcloud' });
    });

    app.use(
        '/mixcloud/files',
        serveStatic(path.join(env.__dirname, 'public/mixcloud'))
    );
};
