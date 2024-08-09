import Hapi from '@hapi/hapi';
export let server;
export const init = async function () {
    server = Hapi.server({
        port: process.env.PORT || 3000,
        host: '0.0.0.0',
    });
    // Routes will go here
    return server;
};
export const start = async function () {
    console.log(`Listening on ${server.settings.host}:${server.settings.port}`);
    return server.start();
};
