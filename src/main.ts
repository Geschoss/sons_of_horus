import { init, start } from './app/index.js';

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init().then(() => start());
