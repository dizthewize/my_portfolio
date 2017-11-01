import source from './source.json';

const user = USER
const refreshToken = REFRESH_TOKEN
const accessToken = ACCESS_TOKEN

module.exports = {
    user,
    clientId: source.web.client_id,
    clientSecret: source.web.client_secret,
    refreshToken,
    accessToken
};
