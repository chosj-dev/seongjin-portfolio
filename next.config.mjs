/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ['raw.githubusercontent.com'],
    },
};

export default nextConfig;
