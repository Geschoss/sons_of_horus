import { discordRoute } from 'services/discord';
import { mixcloudRoute } from 'services/mixcloud';
import { youtubeRoute } from 'services/youtube';

export const routes = [mixcloudRoute, youtubeRoute, discordRoute];
