const info = require('./info');
const servers = require('./servers');
const users = require('./users');
const streams = require('./streams');

module.exports = {
    ...info,
    ...servers,
    components: {
        schemas: {
            ...users.components.schemas,
            ...streams.components.schemas,
        }
    },
    paths: {
        ...users.paths,
        ...streams.paths,
    }
};