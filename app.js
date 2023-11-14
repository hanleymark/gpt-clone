import { getConfig } from './lib/getConfig.js';

const config = await getConfig();

const apiKey = config?.OPEN_AI_KEY;
console.log(apiKey);
