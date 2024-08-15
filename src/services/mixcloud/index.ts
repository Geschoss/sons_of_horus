import { fetchReleaseById, fetchReleases } from 'services/mixcloud/api';
import { Route } from 'shared/types/common';

export const mixcloudRoute: Route = ({ app, env, logger }) => {
    app.get<{ ReqQuery: { page: string; items_per_page: string } }>(
        '/mixcloud/releases',
        async function (request, reply) {
            let query = request.query;

            let page = parseInt(query.page || 10, 0);
            let items_per_page = parseInt(query.items_per_page || 10, 10);

            const releases = await fetchReleases(items_per_page, page);

            reply.send({ releases });
            logger.info('Releases success sended back');
        }
    );

    app.get('/mixcloud/release/:releaseId', async function (request, reply) {
        const releaseId = request.params.releaseId;
        const release = await fetchReleaseById(releaseId);

        reply.send({ release });
        logger.info(`Release ${releaseId} success sended back`);
    });
};
