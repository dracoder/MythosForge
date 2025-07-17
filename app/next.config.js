const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
    reactStrictMode: false,
};

module.exports = withNextIntl(nextConfig);
