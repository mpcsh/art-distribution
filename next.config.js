/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["art-distribution.s3.amazonaws.com"],
	},
};

module.exports = nextConfig;
