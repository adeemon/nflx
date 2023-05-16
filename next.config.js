/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'i.ibb.co',
            port: '',
            pathname: '/CJZ472c/',
        }, ],
        domains: ['i.ibb.co']
    },
}

module.exports = nextConfig