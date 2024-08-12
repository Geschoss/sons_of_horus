import { fetchReleaseById, fetchReleases } from 'services/mixcloud/db';
import { Route } from 'shared/types/common';

export const mixcloudRoute: Route = ({ app, env, logger }) => {
    app.get('/mixcloud/releases', async function (request, reply) {
        const releases = await fetchReleases();

        reply.send({ releases });
        logger.info('Releases success sended back');
    });

    app.get('/mixcloud/release/:releaseId', async function (request, reply) {
        const releaseId = request.params.releaseId;
        const release = await fetchReleaseById(releaseId);

        reply.send({ release });
        logger.info(`Release ${releaseId} success sended back`);
    });
};
