import { releases } from 'services/mixcloud/db';
import { Route } from 'shared/types/common';

export const mixcloudRoute: Route = ({ app, env, logger }) => {
    app.get('/mixcloud/releases', function (request, reply) {
        reply.send({ releases });
    });
};
