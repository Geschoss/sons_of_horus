import { Express } from 'express';
import { AppLoger } from 'shared/logger';

export type Env = { __dirname: string };
export type Route = (args: {
    app: Express;
    logger: AppLoger;
    env: Env;
}) => void;
