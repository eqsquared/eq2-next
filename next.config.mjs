/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    reactStrictMode: true,
    // Adjust this to the name of your GitHub repository
    basePath: isProd ? '/eq2-next/' : '',
    assetPrefix: isProd ? '/eq2-next/' : '',
    images: {
        loader: 'default',
        path: isProd ? '/eq2-next/' : '',
    },
};

export default nextConfig;
