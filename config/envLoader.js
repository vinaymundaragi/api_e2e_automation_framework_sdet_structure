import dev from './dev.env.js';
import stage from './stage.env.js';
import prod from './prod.env.js';

const ENV = process.env.ENV || 'dev';

const envConfig = {
    dev,
    stage,
    prod
};

export default envConfig[ENV];