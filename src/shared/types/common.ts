import { Express } from 'express';
import { AppLoger } from 'shared/logger';
import { DefaultEventsMap, Server } from 'socket.io';

export type Env = { dirname: string; port: number; failByPrecent: number };
export type Route = (args: {
    app: Express;
    env: Env;
    logger: AppLoger;
    io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>;
}) => void;
