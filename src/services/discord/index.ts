import { Route } from 'shared/types/common';

export const discordRoute: Route = ({ io }) => {
    io.on('connection', (socket) => {
        socket.on('output message', (msg) => {
            console.log(msg);
            io.emit('input message', msg);
        });

        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    });
};
