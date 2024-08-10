import path from 'node:path';
import serveStatic from 'serve-static';
import { Route } from 'shared/types/common';

export const youtubeRoute: Route = ({ app, env }) => {
    app.get('/youtube', function (request, reply) {
        reply.send({ hello: 'youtube' });
    });

    app.use(
        '/youtube/files',
        serveStatic(path.join(env.__dirname, 'public/youtube'))
    );
};
