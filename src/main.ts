import { init } from 'app/index';

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
