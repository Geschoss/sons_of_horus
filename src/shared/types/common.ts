import { Express } from 'express';
import { AppLoger } from 'shared/logger';

export type Env = { dirname: string; port: number; failByPrecent: number };
export type Route = (args: {
    app: Express;
    env: Env;
    logger: AppLoger;
}) => void;
